"use server";

import { kv } from "@vercel/kv";

export const hitAction = async (slug: string) => {
  await kv.incr(`hits:${slug}`);
};
