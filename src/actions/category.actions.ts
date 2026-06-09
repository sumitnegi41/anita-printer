"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { CategorySchema } from "@/schemas/category.schema";
import { createCategory } from "@/services/category.service";

export async function createCategoryAction(
  formData: FormData
) {
  const rawData = {
    name: formData.get("name"),
    status: formData.get("status"),
    description: formData.get("description"),
    seoTitle: formData.get("seoTitle"),
    seoDescription: formData.get("seoDescription"),
    seoKeywords:
      formData
        .get("seoKeywords")
        ?.toString()
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean) ?? [],
  };

  const validatedData =
    CategorySchema.parse(rawData);

  await createCategory(
    validatedData
  );

  revalidatePath(
    "/admin/categories"
  );

  redirect(
    "/admin/categories"
  );
}