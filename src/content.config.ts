import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const games = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/games" }),
  schema: z.object({
    title: z.string(),
    kind: z.enum(["game"]).default("game"),
    genre: z.string(),
    year: z.number(),
    platforms: z.array(z.string()),
    cover: z.string(),
    screenshots: z.array(z.string()).default([]),
    bilibiliBvid: z.string().optional().default(""),
    downloads: z
      .array(
        z.object({
          label: z.string(),
          version: z.string().optional().default(""),
          size: z.string().optional().default(""),
          url: z.string().optional().default(""),
        }),
      )
      .default([]),
  }),
});

export const collections = { games };
