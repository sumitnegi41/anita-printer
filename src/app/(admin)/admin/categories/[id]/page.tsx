import Link from "next/link";
import { notFound } from "next/navigation";

import { categories } from "@/constants/categories";

type CategoryDetailsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function CategoryDetailsPage({
  params,
}: CategoryDetailsPageProps) {
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
            {category.name}
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Category details and SEO information.
          </p>
        </div>

        <Link
          href={`/admin/categories/${category.id}/edit`}
          className="
            inline-flex
            items-center
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
          Edit Category
        </Link>
      </div>

      {/* Main Grid */}

      <div className="grid grid-cols-3 gap-8">
        {/* Left */}

        <div className="col-span-2 space-y-6">
          {/* Basic Information */}

          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">
              Basic Information
            </h2>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-gray-500">
                  Category Name
                </p>

                <p className="mt-1 font-medium text-gray-800">
                  {category.name}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Slug
                </p>

                <p className="mt-1 font-medium text-gray-800">
                  {category.slug}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Status
                </p>

                <p className="mt-1 font-medium text-gray-800 capitalize">
                  {category.status}
                </p>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-sm text-gray-500">
                Description
              </p>

              <p className="mt-2 text-sm leading-7 text-gray-700">
                {category.description}
              </p>
            </div>
          </div>

          {/* SEO Information */}

          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">
              SEO Information
            </h2>

            <div className="space-y-6">
              <div>
                <p className="text-sm text-gray-500">
                  SEO Title
                </p>

                <p className="mt-1 font-medium text-gray-800">
                  {category.seoTitle}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  SEO Description
                </p>

                <p className="mt-2 text-sm leading-7 text-gray-700">
                  {category.seoDescription}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  SEO Keywords
                </p>

                <div className="flex flex-wrap gap-2 mt-3">
                  {category.seoKeywords.map(
                    (keyword) => (
                      <span
                        key={keyword}
                        className="
                          inline-flex
                          items-center
                          rounded-full
                          bg-gray-100
                          px-3
                          py-1
                          text-xs
                          font-medium
                          text-gray-700
                        "
                      >
                        {keyword}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right */}

        <div className="space-y-6">
          {/* Timeline */}

          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">
              Timeline
            </h2>

            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  Created At
                </span>

                <span className="text-sm font-medium text-gray-800">
                  {category.createdAt}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  Last Updated
                </span>

                <span className="text-sm font-medium text-gray-800">
                  {category.updatedAt}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}