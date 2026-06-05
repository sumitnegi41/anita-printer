import FormSection from "@/components/forms/FormSection";
import InputField from "@/components/forms/InputField";
import SelectField from "@/components/forms/SelectField";
import TextareaField from "@/components/forms/TextareaField";

export default function CreateProductPage() {
  return (
    <div>
      {/* Page Header */}

      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Create Product
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Add and manage manufacturing products.
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
          Save Product
        </button>
      </div>

      {/* Main Grid */}

      <div className="grid grid-cols-2 gap-8">
        {/* Left Column */}

        <div className="space-y-8">
          <FormSection title="Product Information">
            <InputField
              label="Product Name"
              placeholder="Enter product name"
            />

            <InputField
              label="Slug"
              placeholder="woven-labels"
            />

            <SelectField
              label="Category"
              options={[
                "Labels",
                "Stickers",
                "Packaging",
              ]}
            />

            <SelectField
              label="Status"
              options={[
                "Active",
                "Draft",
                "Archived",
              ]}
            />
          </FormSection>

          <FormSection title="Manufacturing Options">
            <InputField
              label="Available Materials"
              placeholder="Cotton, Polyester, Satin"
            />

            <InputField
              label="Available Finishes"
              placeholder="Matte, Glossy"
            />

            <InputField
              label="Available Sizes"
              placeholder="Small, Medium, Large"
            />

            <InputField
              label="Minimum Order Quantity"
              placeholder="1000"
              type="number"
            />
          </FormSection>

          <FormSection title="SEO Settings">
            <InputField
              label="SEO Title"
              placeholder="Enter SEO title"
            />

            <TextareaField
              label="SEO Description"
              placeholder="Enter SEO description"
            />

            <InputField
              label="SEO Keywords"
              placeholder="woven labels, garment labels"
            />
          </FormSection>
        </div>

        {/* Right Column */}

        <div className="space-y-8">
          <FormSection title="Product Content">
            <TextareaField
              label="Short Description"
              placeholder="Enter short description"
            />

            <TextareaField
              label="Full Description"
              placeholder="Enter detailed product description"
            />
          </FormSection>

          <FormSection title="Media">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Featured Image
              </label>

              <div
                className="
                  h-40
                  rounded-2xl
                  border-2
                  border-dashed
                  border-gray-200
                  flex
                  items-center
                  justify-center
                  text-sm
                  text-gray-400
                "
              >
                Upload Featured Image
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Gallery Images
              </label>

              <div
                className="
                  h-40
                  rounded-2xl
                  border-2
                  border-dashed
                  border-gray-200
                  flex
                  items-center
                  justify-center
                  text-sm
                  text-gray-400
                "
              >
                Upload Gallery Images
              </div>
            </div>
          </FormSection>
        </div>
      </div>
    </div>
  );
}