import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const Work: React.FC = () => {
  return (
    <>
      <p className="mb-4">
        Here&apos;s a look at what I&apos;ve been up to recently:
      </p>
      <Card>
        <CardHeader>
          <Button variant="link" asChild className="p-0">
            <Link href="https://faire.com" target="_blank" className="w-fit">
              <CardTitle>Faire</CardTitle>
            </Link>
          </Button>
          <CardDescription>Senior Frontend Engineer</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="pl-4" style={{ listStyleType: "square" }}>
            <li className="mb-2 md:mb-0">
              Lead several brand acquisition and order placement features
            </li>
            <li className="mb-2 md:mb-0">
              Migrated our legacy React SPA codebase to hooks, react-query, and
              NextJS
            </li>
            <li>
              Taught and mentored frontend engineers on React best practices
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button asChild>
            <Link href="/work">Learn more</Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};