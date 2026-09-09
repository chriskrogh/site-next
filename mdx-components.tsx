import type { MDXComponents } from "mdx/types";
import type { ComponentPropsWithoutRef } from "react";

const isGrowthGraph = (src: unknown) =>
  typeof src === "string" &&
  src.includes("/blog/what-changes-my-slope-next/growth-");

export function useMDXComponents(): MDXComponents {
  return {
    img: (props: ComponentPropsWithoutRef<"img">) => {
      const { alt, className, ...rest } = props;

      if (isGrowthGraph(props.src)) {
        return (
          <span className="block overflow-hidden rounded-lg bg-foreground dark:bg-transparent">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              {...rest}
              alt={alt ?? ""}
              className={["w-full dark:mix-blend-screen", className]
                .filter(Boolean)
                .join(" ")}
            />
          </span>
        );
      }

      // eslint-disable-next-line @next/next/no-img-element
      return <img {...rest} alt={alt ?? ""} className={className} />;
    },
  };
}
