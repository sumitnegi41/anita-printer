import FormSection from "@/components/forms/FormSection";
import InputField from "@/components/forms/InputField";
import SelectField from "@/components/forms/SelectField";
import TextareaField from "@/components/forms/TextareaField";

export default function CreateCategoryPage() {
  return (
    <div>
      {/* Header */}

      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Create Category
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Create and manage product categories.
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
          Save Category
        </button>
      </div>

      {/* Main Grid */}

      <div className="grid grid-cols-2 gap-8">
        {/* Basic Information */}

        <FormSection title="Basic Information">
          <InputField
            label="Category Name"
            placeholder="Enter category name"
          />

          <InputField
            label="Slug"
            placeholder="Enter category slug"
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
            placeholder="Write category description..."
          />
        </FormSection>

        {/* SEO Information */}

        <FormSection title="SEO Information">
          <InputField
            label="SEO Title"
            placeholder="Enter SEO title"
          />

          <TextareaField
            label="SEO Description"
            placeholder="Enter SEO description..."
          />

          <InputField
            label="SEO Keywords"
            placeholder="Enter keywords separated by commas"
          />
        </FormSection>
      </div>
    </div>
  );
}