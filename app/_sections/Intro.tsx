import Link from "next/link";

export const Intro: React.FC = () => {
  return (
    <>
      <h2 className="mb-6">hello there 👋</h2>
      <p>
        I&apos;m Chris Krogh and I like building cool things. I currently work
        at{" "}
        <span>
          <Link
            href="https://www.faire.com"
            target="_blank"
            className="inline-block cursor-pointer underline"
          >
            Faire
          </Link>
        </span>{" "}
        where I help build the future of wholesale.
      </p>
      <p className="mt-4">
        Outside of Faire, I shipped{" "}
        <span>
          <Link
            href="https://www.vin.gs"
            target="_blank"
            className="inline-block cursor-pointer underline"
          >
            Vings
          </Link>
        </span>
        , a personal finance app for banking, crypto, and AI-native insights.
      </p>
    </>
  );
};
