"use client";

import { Trash2 } from "lucide-react";

import { deleteCategoryAction } from "@/actions/category.actions";

type DeleteCategoryButtonProps = {
  categoryId: number;
};

export default function DeleteCategoryButton({
  categoryId,
}: DeleteCategoryButtonProps) {
  async function handleDelete() {
    const confirmed = window.confirm(
      "Are you sure you want to delete this category?"
    );

    if (!confirmed) {
      return;
    }

    await deleteCategoryAction(categoryId);
  }

  return (
    <button
      type="button"
      onClick={handleDelete}
      className="flex items-center justify-center w-9 h-9 rounded-lg border border-red-100 bg-white text-red-500 transition-all hover:bg-red-50 hover:border-red-200"
    >
      <Trash2 size={16} />
    </button>
  );
}