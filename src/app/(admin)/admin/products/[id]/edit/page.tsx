import FormSection from "@/components/forms/FormSection";
import InputField from "@/components/forms/InputField";
import SelectField from "@/components/forms/SelectField";
import TextareaField from "@/components/forms/TextareaField";
import { products } from "@/constants/products";
import { notFound } from "next/navigation";
import Image from "next/image";

type ProductEditPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductEditPage({
  params,
}: ProductEditPageProps) {
  const { id } = await params;

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    notFound();
  }

  return (
    <div>
      {/* Header */}

      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Edit Product
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Update product information and
            manufacturing details.
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
          Update Product
        </button>
      </div>

      {/* Main Grid */}

      <div className="grid grid-cols-2 gap-8">
        {/* Left Column */}

        <div className="space-y-8">
          <FormSection title="Product Information">
            <InputField
              label="Product Name"
              defaultValue={product.name}
            />

            <InputField
              label="Slug"
              defaultValue={product.slug}
            />

            <SelectField
              label="Category"
              options={[
                "Labels",
                "Stickers",
                "Packaging",
                "Tags",
              ]}
            />

            <SelectField
              label="Status"
              options={[
                "active",
                "draft",
                "archived",
              ]}
            />
          </FormSection>

          <FormSection title="Manufacturing Options">
            <InputField
              label="Available Materials"
              defaultValue={product.availableMaterials.join(
                ", "
              )}
            />

            <InputField
              label="Available Finishes"
              defaultValue={product.availableFinishes.join(
                ", "
              )}
            />

            <InputField
              label="Available Sizes"
              defaultValue={product.availableSizes.join(
                ", "
              )}
            />

            <InputField
              label="Minimum Order Quantity"
              defaultValue={String(
                product.minimumOrderQty
              )}
              type="number"
            />
          </FormSection>

          <FormSection title="SEO Settings">
            <InputField
              label="SEO Title"
              defaultValue={product.seoTitle}
            />

            <TextareaField
              label="SEO Description"
              defaultValue={
                product.seoDescription
              }
            />

            <InputField
              label="SEO Keywords"
              defaultValue={product.seoKeywords.join(
                ", "
              )}
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
                  relative
                  h-52
                  rounded-2xl
                  overflow-hidden
                  border
                  border-gray-200
                "
              >
                <Image
                  src={product.featuredImage}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Gallery Images
              </label>

              <div className="grid grid-cols-2 gap-4">
                  {product.galleryImages.map(
                    (
                      image: string,
                      index: number
                    ) => (
                      <div
                        key={index}
                        className="
                          relative
                          h-32
                          rounded-2xl
                          overflow-hidden
                          border
                          border-gray-200
                        "
                      >
                        <Image
                          src={image}
                          alt={`Gallery ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )
                  )}
                </div>
            </div>
          </FormSection>
        </div>
      </div>
    </div>
  );
}