import { kv } from "@vercel/kv";
import { connection } from "next/server";

type Props = {
  slug: string;
};

const isKvConfigured =
  Boolean(process.env.KV_REST_API_URL) &&
  Boolean(process.env.KV_REST_API_TOKEN);

export const HitCounter: React.FC<Props> = async ({ slug }) => {
  await connection();

  if (!isKvConfigured) {
    return null;
  }

  const data = await kv.get<number>(`hits:${slug}`);

  return data ? (
    <p className="text-slate-700 dark:text-slate-300">{data} views</p>
  ) : null;
};
