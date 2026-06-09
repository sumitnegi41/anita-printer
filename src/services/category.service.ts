import { prisma } from "@/lib/prisma";
import type { CategoryInput } from "@/schemas/category.schema";

export async function createCategory(
  data: CategoryInput
) {
  const slug = data.name
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-");

  const existingCategory =
    await prisma.category.findUnique({
      where: {
        slug,
      },
    });

  if (existingCategory) {
    throw new Error(
      "Category with this slug already exists"
    );
  }

  return prisma.category.create({
    data: {
      name: data.name,
      slug,
      description: data.description,
      seoTitle: data.seoTitle,
      seoDescription: data.seoDescription,
      seoKeywords: data.seoKeywords,
      status: data.status,
    },
  });
}