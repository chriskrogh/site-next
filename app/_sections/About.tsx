import Link from "next/link";

export const About: React.FC = () => {
  return (
    <>
      <p className="mb-4">
        I write about React, Next.js, frontend performance, and engineering
        career growth. My recent work spans conversational shopping experiences,
        marketplace speed, developer tooling, and full-stack product builds with
        Expo and TypeScript.
      </p>
      <p className="mb-4">
        If you want to learn a little more about me, check{" "}
        <span>
          <Link href="/about" className="underline" prefetch={false}>
            this out
          </Link>
        </span>
        .
      </p>
    </>
  );
};
