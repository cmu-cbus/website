import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const events = defineCollection({
  loader: glob({ pattern: '*.toml', base: './src/content/events' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    time: z.string(),
    location: z.string(),
    description: z.string(),
    tags: z.array(z.string()).optional(),
    links: z.array(
      z.object({
        text: z.string(),
        url: z.url(),
      })
    ).optional(),
  }),
});

const board = defineCollection({
  loader: glob({ pattern: '*.toml', base: './src/content/board' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    image: z.string(),
    bio: z.string(),
    priority: z.number().default(0),
    coffeeChat: z.url(),
    email: z.email().optional(),
    linkedin: z.url().optional(),
    github: z.url().optional(),
    website: z.url().optional(),
  }),
});

const resources = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/resources' }),
  schema: z.object({
    title: z.string(),
    section: z.string(),
    priority: z.number().default(0),
    url: z.url().optional(),
    description: z.string().optional(),
    author: z.string().optional(),
  }),
});

export const collections = { events, board, resources };
