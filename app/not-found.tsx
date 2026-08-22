import Link from "next/link";

import { getAbsoluteUrl } from "./_utils/seo";

const Page: React.FC = () => {
  return (
    <main className="flex justify-center w-full">
      <div className="w-full max-w-[840px] px-5 mx-auto py-16">
        <h1 className="mb-4 text-3xl font-semibold tracking-tight font-heading scroll-m-20">
          404 — Page not found
        </h1>
        <p className="mb-6">
          This page does not exist. Try one of the links below to find what you
          need.
        </p>
        <nav>
          <ul className="pl-4 space-y-2" style={{ listStyleType: "square" }}>
            <li>
              <Link href="/" className="underline">Home</Link>
            </li>
            <li>
              <Link href="/about" className="underline">About</Link>
            </li>
            <li>
              <Link href="/work" className="underline">Work</Link>
            </li>
            <li>
              <Link href="/blog" className="underline">Blog</Link>
            </li>
            <li>
              <Link href="/contact" className="underline">Contact</Link>
            </li>
            <li>
              <Link href="/privacy" className="underline">Privacy</Link>
            </li>
            <li>
              <a href={getAbsoluteUrl("/sitemap.xml")} className="underline">
                Sitemap
              </a>
            </li>
            <li>
              <a href={getAbsoluteUrl("/llms.txt")} className="underline">
                llms.txt
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </main>
  );
};

export default Page;
