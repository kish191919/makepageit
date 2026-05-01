import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { posts } from "@/lib/posts";
import CTA from "@/components/sections/CTA";
import { blogArticleSchema, breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.cover],
    },
  };
}

function renderContent(content: string) {
  return content.split("\n\n").map((block, i) => {
    const trimmed = block.trim();
    if (trimmed.startsWith("## ")) {
      return (
        <h2
          key={i}
          className="mt-12 text-2xl font-bold text-ink-900 sm:text-3xl"
        >
          {trimmed.replace(/^##\s+/, "")}
        </h2>
      );
    }
    if (/^\d+\.\s/.test(trimmed)) {
      const items = trimmed.split("\n").map((l) => l.replace(/^\d+\.\s+/, ""));
      return (
        <ol
          key={i}
          className="mt-6 list-decimal space-y-2 pl-6 text-base leading-relaxed text-ink-700"
        >
          {items.map((it, j) => (
            <li key={j}>{it}</li>
          ))}
        </ol>
      );
    }
    return (
      <p
        key={i}
        className="mt-6 text-base leading-relaxed text-ink-700 sm:text-lg"
      >
        {trimmed}
      </p>
    );
  });
}

export default function BlogPostPage({ params }: Props) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  const others = posts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const ldData = [
    blogArticleSchema(post),
    breadcrumbSchema([
      { name: "Home", path: "/ko" },
      { name: "Blog", path: "/ko/blog" },
      { name: post.title, path: `/ko/blog/${post.slug}` },
    ]),
  ];

  return (
    <>
      <script {...jsonLdScriptProps(ldData)} />
      <article className="bg-white pb-16">
        <header className="border-b border-ink-200 bg-ink-50 py-16 sm:py-20">
          <div className="container-custom max-w-3xl">
            <Link
              href="/ko/blog"
              className="text-sm font-semibold text-brand-600 hover:underline"
            >
              ← 블로그 목록
            </Link>
            <span className="mt-6 inline-flex rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
              {post.category}
            </span>
            <h1 className="mt-5 text-3xl font-bold leading-tight text-ink-900 sm:text-5xl">
              {post.title}
            </h1>
            <p className="mt-6 text-base text-ink-500 sm:text-lg">
              {post.date} · {post.readingTime} 분량
            </p>
          </div>
        </header>

        <div className="container-custom max-w-3xl">
          <div className="relative mt-12 aspect-[16/9] overflow-hidden rounded-3xl bg-ink-100">
            <Image
              src={post.cover}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 768px"
              className="object-cover"
            />
          </div>

          <div className="prose-custom mt-10">{renderContent(post.content)}</div>
        </div>
      </article>

      <section className="border-t border-ink-200 bg-ink-50 py-16 sm:py-24">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-ink-900 sm:text-3xl">
            함께 읽어보세요
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((p) => (
              <Link
                key={p.slug}
                href={`/ko/blog/${p.slug}`}
                className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-ink-200 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-ink-100">
                  <Image
                    src={p.cover}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="self-start rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                    {p.category}
                  </span>
                  <h3 className="mt-4 text-lg font-bold leading-snug text-ink-900">
                    {p.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-ink-500">{p.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA lang="ko" />
    </>
  );
}
