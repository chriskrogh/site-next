import type { Metadata } from "next";
import Image from "next/image";

import { createPageMetadata } from "@/app/_utils/seo";

import { CONTAINER_CLASSNAME, CONTENT_CONTAINER_CLASSNAME } from "../styles";

export const metadata: Metadata = createPageMetadata({
  title: "Work",
  description:
    "A snapshot of Chris Krogh's software engineering work at Faire and Vings, including product engineering with React, Next.js, Expo, and TypeScript.",
  path: "/work",
  keywords: [
    "Faire",
    "Vings",
    "software engineering work",
    "React",
    "Next.js",
    "Expo",
    "TypeScript",
  ],
});

const Page: React.FC = () => {
  return (
    <main className={CONTAINER_CLASSNAME}>
      <div className={CONTENT_CONTAINER_CLASSNAME}>
        <div className="mb-8 flex items-center gap-3">
          <Image
            src="/faire-logo.png"
            alt=""
            width={32}
            height={32}
            className="h-8 w-8 rounded-sm"
          />
          <h2>Faire</h2>
        </div>
        <div className="sm:flex justify-between items-end mb-3">
          <h4>Senior Frontend Engineer</h4>
          <p>Feb, 2024 - now</p>
        </div>
        <p className="mb-4">
          As a senior frontend engineer at Faire, I&apos;ve led high-leverage
          performance work across cart, checkout, PDP, and logged-out
          discovery. I&apos;ve shipped React Server Component migrations,
          aggressive data prefetching, static generation infrastructure, and
          React Compiler adoption that improved core page latency and
          contributed measurable order-volume wins.
          <br />
          <br />
          I&apos;ve also helped modernize how Faire builds frontend software. I
          drove the multi-year hooks and MobX migration across the finish line,
          helped unlock Turbopack and the React Compiler, decomposed product
          areas out of a deprecated monolith, improved high-traffic CI
          pipelines, and shared patterns that let other teams move faster
          without needing me in the room.
          <br />
          <br />
          More recently, I&apos;ve been building the frontend foundation for
          Faire&apos;s AI and Agentic Commerce work. I created infrastructure for
          AI-powered prototypes and Faire&apos;s first ChatGPT app, explored
          AI-assisted shopping experiences for search refinement and product
          evaluation, and have spent the last four months shaping conversational
          workflows for discovery, evaluation, and buying.
        </p>

        <div className="sm:flex justify-between items-end mb-3 mt-8">
          <h4>Frontend Engineer</h4>
          <p>Apr, 2022 - Feb, 2024</p>
        </div>
        <p className="mb-4">
          When I returned full time, I helped turn Next.js from an exploration
          into a core part of Faire&apos;s frontend infrastructure. I prototyped the
          migration, designed localization and build tooling, and led Faire&apos;s
          first server component page migration to prove the performance upside.
          <br />
          <br />
          I also helped modernize Faire&apos;s React codebase through hooks,
          react-query, migration tooling, dashboards, guides, and hundreds of PR
          reviews. Alongside that platform work, I led major exclusivity
          milestones and mentored engineers through the patterns that became the
          foundation for faster product development.
        </p>

        <div className="sm:flex justify-between items-end mb-3 mt-8">
          <h4>Frontend Engineer Intern</h4>
          <p>Jan, 2021 - Apr, 2021</p>
        </div>
        <p className="mb-4">
          As an intern, I worked on the retailer apparel team and helped build
          features for our Winter market. I also worked on some of our internal
          tools to add UI for triggering Jira reminders & actions manually.
        </p>

        <section className="mt-12">
          <div className="mb-8 flex items-center gap-3">
            <Image
              src="/vings.svg"
              alt=""
              width={28}
              height={31}
              className="h-8 w-auto"
            />
            <h2>Vings</h2>
          </div>

          <div className="mb-3 sm:flex sm:items-end sm:justify-between">
            <h4>Founder / Builder</h4>
            <p>Shipped June, 2025</p>
          </div>
          <p className="mb-4">
            I shipped{" "}
            <a
              href="https://www.vin.gs"
              target="_blank"
              className="underline"
            >
              Vings
            </a>
            , a personal finance app for managing banking and crypto wealth in
            one place. It brings together account connections, transactions,
            budgets, goals, portfolio tracking, and pricing into a full product
            experience across web and mobile.
            <br />
            <br />
            The product has grown from a financial dashboard into an AI-native
            financial copilot, with Today Feed insights for spending anomalies,
            recurring charges, projections, and goal progress. I built the
            project across React, Next.js, Expo, TypeScript, tRPC, and Postgres.
          </p>
        </section>
      </div>
    </main>
  );
};

export default Page;
