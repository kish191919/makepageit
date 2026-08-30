// Finds NY/NJ Korean-run small businesses that have NO website, using the
// Places API (New) Text Search. Website field isn't returned by legacy
// Nearby Search, so we request it explicitly via FieldMask and filter it out.
//
// Run:  node --env-file=.env.local scripts/leadgen-google-places.mjs
//
// Output: scripts/output/leads-<date>.csv (name, phone, address, rating, maps link)
// Note: the API has no email field. Email still needs a manual lookup
// (business's own site doesn't exist by definition, so check its Instagram/
// Facebook page, or call the phone number).

import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const API_KEY = process.env.GOOGLE_PLACES_API_KEY;
if (!API_KEY) {
  console.error("Missing GOOGLE_PLACES_API_KEY. Add it to .env.local first.");
  process.exit(1);
}

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, "output");

// Business categories to search for. Edit this list to match what you're targeting.
const CATEGORIES = [
  "Korean restaurant",
  "Korean clinic",
  "Korean dentist",
  "Korean hagwon tutoring academy",
  "Korean real estate agent",
  "Korean clothing store",
  "Korean beauty salon",
  "Korean grocery store",
];

// NY/NJ towns with a significant Korean-American business presence.
const LOCATIONS = [
  "Flushing, NY",
  "Bayside, NY",
  "Manhattan Koreatown, NY",
  "Palisades Park, NJ",
  "Fort Lee, NJ",
  "Leonia, NJ",
  "Ridgefield, NJ",
  "Tenafly, NJ",
  "Closter, NJ",
  "Englewood, NJ",
];

const FIELD_MASK = [
  "places.id",
  "places.displayName",
  "places.formattedAddress",
  "places.nationalPhoneNumber",
  "places.websiteUri",
  "places.rating",
  "places.userRatingCount",
  "places.businessStatus",
].join(",");

async function searchText(query) {
  const res = await fetch("https://places.googleapis.com/v1/places:searchText", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": API_KEY,
      "X-Goog-FieldMask": FIELD_MASK,
    },
    body: JSON.stringify({ textQuery: query, languageCode: "en", maxResultCount: 20 }),
  });

  if (!res.ok) {
    console.error(`Request failed for "${query}": ${res.status} ${await res.text()}`);
    return [];
  }

  const data = await res.json();
  return data.places || [];
}

function toCsvValue(value) {
  const str = String(value ?? "");
  return /[",\n]/.test(str) ? `"${str.replace(/"/g, '""')}"` : str;
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });

  const seen = new Map(); // place id -> row, dedupes across overlapping queries

  for (const category of CATEGORIES) {
    for (const location of LOCATIONS) {
      const query = `${category} in ${location}`;
      console.log(`Searching: ${query}`);
      const places = await searchText(query);

      for (const place of places) {
        if (place.websiteUri) continue; // has a website already, not a lead
        if (place.businessStatus && place.businessStatus !== "OPERATIONAL") continue;
        if (seen.has(place.id)) continue;

        seen.set(place.id, {
          name: place.displayName?.text || "",
          category,
          phone: place.nationalPhoneNumber || "",
          address: place.formattedAddress || "",
          rating: place.rating ?? "",
          reviewCount: place.userRatingCount ?? "",
          mapsUrl: `https://www.google.com/maps/place/?q=place_id:${place.id}`,
          sourceQuery: query,
        });
      }

      // Be a polite API citizen between requests.
      await new Promise((resolve) => setTimeout(resolve, 200));
    }
  }

  const rows = [...seen.values()];
  const header = ["name", "category", "phone", "address", "rating", "reviewCount", "mapsUrl", "sourceQuery"];
  const csv = [
    header.join(","),
    ...rows.map((row) => header.map((key) => toCsvValue(row[key])).join(",")),
  ].join("\n");

  const outPath = path.join(OUT_DIR, `leads-${new Date().toISOString().slice(0, 10)}.csv`);
  await writeFile(outPath, csv, "utf8");

  console.log(`\nDone. ${rows.length} website-less businesses found.`);
  console.log(`Written to ${outPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
