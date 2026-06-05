import FormSection from "@/components/forms/FormSection";
import InputField from "@/components/forms/InputField";
import SelectField from "@/components/forms/SelectField";
import TextareaField from "@/components/forms/TextareaField";

import { categories } from "@/constants/categories";

import { notFound } from "next/navigation";

type CategoryEditPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function CategoryEditPage({
  params,
}: CategoryEditPageProps) {
  const { id } = await params;

  const category = categories.find(
    (item) => item.id === Number(id)
  );

  if (!category) {
    notFound();
  }

  return (
    <div>
      {/* Header */}

      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Edit Category
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Update category details and SEO information.
          </p>
        </div>

        <button
          className="
            h-11
            px-6
            rounded-xl
            bg-[#07122B]
            text-white
            text-sm
            font-medium
            hover:opacity-95
          "
        >
          Update Category
        </button>
      </div>

      {/* Main Grid */}

      <div className="grid grid-cols-2 gap-8">
        {/* Basic Information */}

        <FormSection title="Basic Information">
          <InputField
            label="Category Name"
            defaultValue={category.name}
          />

          <InputField
            label="Slug"
            defaultValue={category.slug}
          />

          <SelectField
            label="Status"
            options={[
              "active",
              "inactive",
            ]}
          />

          <TextareaField
            label="Description"
            defaultValue={
              category.description
            }
            placeholder="Write category description..."
          />
        </FormSection>

        {/* SEO Information */}

        <FormSection title="SEO Information">
          <InputField
            label="SEO Title"
            defaultValue={
              category.seoTitle
            }
          />

          <TextareaField
            label="SEO Description"
            defaultValue={
              category.seoDescription
            }
            placeholder="Enter SEO description..."
          />

          <InputField
            label="SEO Keywords"
            defaultValue={category.seoKeywords.join(
              ", "
            )}
            placeholder="Enter keywords separated by commas"
          />
        </FormSection>
      </div>
    </div>
  );
}