import { notFound } from "next/navigation";

import CategoryForm from "@/components/dashboard/categories/CategoryForm";

import { getCategoryById } from "@/services/category.service";

type CategoryEditPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function CategoryEditPage({
  params,
}: CategoryEditPageProps) {
  const { id } = await params;

  const category = await getCategoryById(
    Number(id)
  );

  if (!category) {
    notFound();
  }

  return (
    <CategoryForm
      mode="edit"
      category={category}
    />
  );
}