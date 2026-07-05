"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { CategorySchema } from "@/schemas/category.schema";
import { createCategory, updateCategory, deleteCategory } from "@/services/category.service";
import type { ActionState } from "@/types/action-state";

export async function createCategoryAction(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
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

  const validationResult = CategorySchema.safeParse(rawData);
  if (!validationResult.success) {
    return {
      success: false,
      errors:
        validationResult.error.flatten()
          .fieldErrors,
    };
  }

  await createCategory(
    validationResult.data
  );
    

  revalidatePath(
    "/admin/categories"
  );

  redirect(
    "/admin/categories"
  );
}

export async function updateCategoryAction(
  id: number,
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
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

  const validationResult = CategorySchema.safeParse(rawData);

  if (!validationResult.success) {
    return {
      success: false,
      errors: validationResult.error.flatten().fieldErrors,
    };
  }

  await updateCategory(id, validationResult.data);

  revalidatePath("/admin/categories");
  revalidatePath(`/admin/categories/${id}`);

  redirect(`/admin/categories/${id}`);
}

export async function deleteCategoryAction(
  id: number
) {
  await deleteCategory(id);

  revalidatePath(
    "/admin/categories"
  );

  redirect(
    "/admin/categories"
  );
}
