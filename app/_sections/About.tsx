import Link from "next/link";

export const About: React.FC = () => {
  return (
    <>
      <p className="mb-4">
        If you want to learn a little more about me, check{" "}
        <span>
          <Link href="/about" className="underline">
            this out
          </Link>
        </span>
        .
      </p>
    </>
  );
};
