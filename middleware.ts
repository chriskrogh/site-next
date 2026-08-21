import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { prefersMarkdown } from "@/lib/agent/accept";
import {
  getMarkdownForPath,
  getNotFoundMarkdown,
  shouldReturnMarkdownNotFound,
} from "@/lib/agent/markdown-content";

const VARY_HEADER = "Accept, Accept-Encoding";

const withVaryHeader = (response: NextResponse) => {
  const values = new Set(
    response.headers
      .get("Vary")
      ?.split(",")
      .map((value) => value.trim())
      .filter(Boolean) ?? []
  );

  values.add("Accept");
  values.add("Accept-Encoding");
  response.headers.set("Vary", [...values].join(", "));
  return response;
};

const markdownResponse = (content: string, status = 200) =>
  new NextResponse(content, {
    status,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      Vary: VARY_HEADER,
    },
  });

export const middleware = (request: NextRequest) => {
  const accept = request.headers.get("accept") ?? "";
  const pathname = request.nextUrl.pathname;

  if (prefersMarkdown(accept)) {
    const markdown = getMarkdownForPath(pathname);

    if (markdown) {
      return markdownResponse(markdown.content, markdown.status ?? 200);
    }

    if (shouldReturnMarkdownNotFound(pathname)) {
      return markdownResponse(getNotFoundMarkdown(pathname), 404);
    }
  }

  return withVaryHeader(NextResponse.next());
};

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|txt|xml)$).*)",
  ],
};
