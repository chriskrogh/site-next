import Image from "next/image";
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
        Here&apos;s a look at what I&apos;ve been up to recently. These projects
        reflect the kinds of frontend architecture, performance, and product
        problems I like to solve: making complex experiences feel simple,
        measurable, and fast for real users on the web today.
      </p>
      <div className="space-y-4">
        <Card>
          <CardHeader>
            <Button variant="link" asChild className="p-0">
              <Link href="https://faire.com" target="_blank" className="w-fit">
                <CardTitle className="flex items-center gap-2">
                  <Image
                    src="/faire-logo.png"
                    alt=""
                    width={20}
                    height={20}
                    className="h-5 w-5 rounded-sm"
                  />
                  Faire
                </CardTitle>
              </Link>
            </Button>
            <CardDescription>Staff Software Engineer</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="pl-4" style={{ listStyleType: "square" }}>
              <li className="mb-2 md:mb-0">
                Frontend lead for a retailer shopping assistant, partnering with
                product and design on what to build and when
              </li>
              <li className="mb-2 md:mb-0">
                Drove frontend modernization through hooks, Turbopack, codebase
                decomposition, and faster CI
              </li>
              <li>
                Led marketplace speed work across the site using Server
                Components, prefetching, and other resource optimizations
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link href="/work" prefetch={false}>
                Learn more
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <Button variant="link" asChild className="p-0">
              <Link href="https://www.vin.gs" target="_blank" className="w-fit">
                <CardTitle className="flex items-center gap-2">
                  <Image
                    src="/vings.svg"
                    alt=""
                    width={18}
                    height={20}
                    className="h-5 w-auto"
                  />
                  Vings
                </CardTitle>
              </Link>
            </Button>
            <CardDescription>Project · Shipped June 2025</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="pl-4" style={{ listStyleType: "square" }}>
              <li className="mb-2 md:mb-0">
                Built a personal finance app for banking, crypto, budgets, and
                goals
              </li>
              <li className="mb-2 md:mb-0">
                Shipped web, native, and backend experiences with React,
                Next.js, Expo, and TypeScript
              </li>
              <li>
                Added AI-native insights through Today Feed and Copilot
                experiences
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link href="/work" prefetch={false}>
                Learn more
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};
