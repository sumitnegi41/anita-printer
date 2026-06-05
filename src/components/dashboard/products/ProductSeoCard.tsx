type Props = {
  product: any;
};

export default function ProductSeoCard({
  product,
}: Props) {
  return (
    <div
      className="
        bg-white
        rounded-2xl
        border
        border-gray-100
        shadow-sm
        p-8
        mt-8
      "
    >
      <h2 className="text-xl font-semibold text-gray-900 mb-6">
        SEO Information
      </h2>

      {/* SEO Title */}

      <div className="mb-6">
        <p className="text-sm text-gray-500 mb-2">
          SEO Title
        </p>

        <p className="font-medium text-gray-800">
          {product.seoTitle}
        </p>
      </div>

      {/* SEO Description */}

      <div className="mb-6">
        <p className="text-sm text-gray-500 mb-2">
          SEO Description
        </p>

        <p className="text-sm leading-7 text-gray-700">
          {product.seoDescription}
        </p>
      </div>

      {/* SEO Keywords */}

      <div>
        <p className="text-sm text-gray-500 mb-3">
          SEO Keywords
        </p>

        <div className="flex flex-wrap gap-3">
          {product.seoKeywords.map(
            (keyword: string) => (
              <span
                key={keyword}
                className="
                  px-4
                  py-2
                  rounded-full
                  bg-blue-50
                  text-sm
                  text-blue-700
                "
              >
                {keyword}
              </span>
            )
          )}
        </div>
      </div>
    </div>
  );
}
