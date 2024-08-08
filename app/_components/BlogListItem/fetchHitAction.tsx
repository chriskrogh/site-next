"use server";

import { kv } from "@vercel/kv";

export const fetchHitAction = async (slug: string) => {
  return await kv.get<number>(`hits:${slug}`);
};
