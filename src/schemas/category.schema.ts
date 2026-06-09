import { z } from "zod";

export const CategorySchema = z.object({
  name: z
    .string()
    .trim()
    .min(
      2,
      "Category name must be at least 2 characters"
    )
    .max(
      100,
      "Category name cannot exceed 100 characters"
    ),

  status: z.enum([
    "active",
    "inactive",
  ]),

  description: z
    .string()
    .max(1000)
    .optional()
    .nullable(),

  seoTitle: z
    .string()
    .max(150)
    .optional()
    .nullable(),

  seoDescription: z
    .string()
    .max(300)
    .optional()
    .nullable(),

  seoKeywords: z
    .array(z.string())
    .default([]),
});

export type CategoryInput =
  z.infer<typeof CategorySchema>;