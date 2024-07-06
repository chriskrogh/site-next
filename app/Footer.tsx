import NextLink from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { CONTAINER_CLASSNAME, CONTENT_CONTAINER_CLASSNAME } from "./styles";

export const Footer: React.FC = () => {
  return (
    <footer
      className={cn(
        CONTAINER_CLASSNAME,
        "absolute bottom-0 left-0 right-0 border-t-2 h-[64px] bg-background"
      )}
    >
      <div
        className={cn(CONTENT_CONTAINER_CLASSNAME, "flex items-center gap-6")}
      >
        <Link href="https://github.com/chriskrogh">github</Link>
        <Link href="https://x.com/chriskrogh_">twitter</Link>
        <Link href="https://www.linkedin.com/in/christopherkrogh/">
          linkedin
        </Link>
      </div>
    </footer>
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
