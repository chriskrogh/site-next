"use server";

import { kv } from "@vercel/kv";
import { headers } from "next/headers";

const isKvConfigured =
  Boolean(process.env.KV_REST_API_URL) && Boolean(process.env.KV_REST_API_TOKEN);

const BOT_USER_AGENT_PATTERN =
  /bot|crawl|crawler|spider|slurp|bingpreview|facebookexternalhit|linkedinbot|pinterest|embedly|quora link preview|showyoubot|outbrain|vkshare|w3c_validator|whatsapp|telegrambot|discordbot|google page speed|lighthouse/i;

export const recordHitAction = async (slug: string) => {
  if (!isKvConfigured) {
    return;
  }

  const requestHeaders = await headers();
  const userAgent = requestHeaders.get("user-agent");

  if (userAgent && BOT_USER_AGENT_PATTERN.test(userAgent)) {
    return;
  }

  await kv.incr(`hits:${slug}`);
};
