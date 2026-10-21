import Link from "next/link";
import type { MDXComponents } from "mdx/types";
import Fotografija from "./Fotografija";
import Par from "./Par";
import Galerija from "./Galerija";
import Citat from "./Citat";

// Tekst je ograničen na ugodnu širinu čitanja (~70 znakova po retku),
// dok fotografije zauzimaju punu širinu sadržaja. Fiksna širina u rem
// (a ne ch) da naslovi i odlomci imaju isti lijevi rub.
const measure = "max-w-[46rem] mx-auto";

export const mdxComponents: MDXComponents = {
  Fotografija,
  Par,
  Galerija,
  Citat,
  h2: (props) => (
    <h2
      className={`${measure} font-sans text-3xl md:text-4xl font-light leading-tight text-black mt-20 mb-8`}
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className={`${measure} font-sans text-xl md:text-2xl font-light leading-snug text-black mt-12 mb-5`}
      {...props}
    />
  ),
  p: (props) => (
    <p className={`${measure} text-gray-600 leading-relaxed md:text-lg mb-6`} {...props} />
  ),
  ul: (props) => (
    <ul
      className={`${measure} list-disc pl-6 text-gray-600 leading-relaxed md:text-lg space-y-2 mb-6 marker:text-gray-400`}
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className={`${measure} list-decimal pl-6 text-gray-600 leading-relaxed md:text-lg space-y-2 mb-6 marker:text-gray-400`}
      {...props}
    />
  ),
  strong: (props) => <strong className="font-medium text-black" {...props} />,
  hr: () => <div className="w-16 h-[1px] bg-black mx-auto my-16" />,
  a: ({ href = "", ...props }) => {
    const className =
      "text-black underline underline-offset-4 decoration-gray-300 hover:decoration-black transition";
    if (href.startsWith("/")) {
      return <Link href={href} className={className} {...props} />;
    }
    return (
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      />
    );
  },
};
