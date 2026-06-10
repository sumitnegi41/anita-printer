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

  status: z.enum(
    ["active", "inactive"],
    {
      message: "Status is required",
    }
  ),

  description: z
    .string()
    .trim()
    .min(
      2,
      "Description is required"
    )
    .max(
      1000,
      "Description cannot exceed 1000 characters"
    ),

  seoTitle: z
    .string()
    .trim()
    .min(
      2,
      "SEO title is required"
    )
    .max(
      150,
      "SEO title cannot exceed 150 characters"
    ),

  seoDescription: z
    .string()
    .trim()
    .min(
      2,
      "SEO description is required"
    )
    .max(
      300,
      "SEO description cannot exceed 300 characters"
    ),

  seoKeywords: z
    .array(z.string())
    .min(
      1,
      "At least one SEO keyword is required"
    ),
});

export type CategoryInput =
  z.infer<typeof CategorySchema>;