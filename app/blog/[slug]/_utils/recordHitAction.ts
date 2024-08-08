"use server";

import { kv } from "@vercel/kv";

export const recordHitAction = async (slug: string) => {
  await kv.incr(`hits:${slug}`);
};
