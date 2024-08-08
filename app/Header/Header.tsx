import NextLink from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { CONTAINER_CLASSNAME, CONTENT_CONTAINER_CLASSNAME } from "../styles";

import { ThemeToggle } from "./ThemeToggle";

export const Header: React.FC = () => {
  return (
    <header className={CONTAINER_CLASSNAME}>
      <div
        className={cn(
          CONTENT_CONTAINER_CLASSNAME,
          "flex justify-between items-center"
        )}
      >
        <div className="flex gap-6 py-6">
          <Link href="/">home</Link>
          <Link href="/work">work</Link>
          {/* <Link href="/blog">blog</Link> */}
          <Link href="/about">about</Link>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
};

type LinkProps = {
  href: string;
  children: React.ReactNode;
};

const Link: React.FC<LinkProps> = ({ href, children }) => {
  return (
    <Button variant="link" asChild className="p-0">
      <NextLink href={href}>{children}</NextLink>
    </Button>
  );
};
