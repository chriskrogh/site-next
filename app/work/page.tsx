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
          I&apos;m currently the lead frontend engineer on the order placement
          team where I steer the implementation of cart and checkout features.
          <br />
          <br />I also lead many speed initiatives to decrease page latency and
          share my learnings and implementation strategies with the team.
        </p>

        <div className="sm:flex justify-between items-end mb-3 mt-8">
          <h4>Frontend Engineer</h4>
          <p>Apr, 2022 - Feb, 2024</p>
        </div>
        <p className="mb-4">
          When I returned to Faire full-time, I hit the ground running on the
          brand acquisition team where I helped build our referral feature and
          dynamic landing pages.
          <br />
          <br />I also led the effort to migrate to{" "}
          <span>
            <a
              href="https://react.dev/reference/react/hooks"
              target="_blank"
              className="underline"
            >
              React hooks
            </a>
          </span>{" "}
          and drove the adoption of{" "}
          <span>
            <a href="https://nextjs.org" target="_blank" className="underline">
              NextJS
            </a>
          </span>{" "}
          to unlock performance wins and improve our codebase&apos;s
          maintainability.
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
