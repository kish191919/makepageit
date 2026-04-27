import Hero from "@/components/sections/Hero";
import Process from "@/components/sections/Process";
import Portfolio from "@/components/sections/Portfolio";
import Pricing from "@/components/sections/Pricing";
import AdditionalOptions from "@/components/sections/AdditionalOptions";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Portfolio limit={6} />
      <Process />
      <Pricing />
      <AdditionalOptions />
      <FAQ />
      <CTA />
    </>
  );
}
