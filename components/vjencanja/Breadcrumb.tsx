import Link from "next/link";
import { SITE_URL } from "@/lib/vjencanja";

type Crumb = { name: string; href: string };

export default function Breadcrumb({ items }: { items: Crumb[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.href}`,
    })),
  };

  return (
    <nav aria-label="Putanja stranice" className="max-w-5xl mx-auto px-6 pt-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ol className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 uppercase tracking-[0.2em] text-xs text-gray-500">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-3">
              {last ? (
                <span aria-current="page" className="text-black">
                  {item.name}
                </span>
              ) : (
                <>
                  <Link href={item.href} className="hover:text-black transition">
                    {item.name}
                  </Link>
                  <span aria-hidden="true">›</span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
