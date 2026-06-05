type Props = {
  product: any;
};

export default function ProductManufacturingCard({
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
        Manufacturing Options
      </h2>

      {/* Materials */}

      <div className="mb-8">
        <p className="text-sm font-medium text-gray-500 mb-3">
          Available Materials
        </p>

        <div className="flex flex-wrap gap-3">
          {product.availableMaterials.map(
            (material: string) => (
              <span
                key={material}
                className="
                  px-4
                  py-2
                  rounded-full
                  bg-gray-100
                  text-sm
                  text-gray-700
                "
              >
                {material}
              </span>
            )
          )}
        </div>
      </div>

      {/* Finishes */}

      <div className="mb-8">
        <p className="text-sm font-medium text-gray-500 mb-3">
          Available Finishes
        </p>

        <div className="flex flex-wrap gap-3">
          {product.availableFinishes.map(
            (finish: string) => (
              <span
                key={finish}
                className="
                  px-4
                  py-2
                  rounded-full
                  bg-gray-100
                  text-sm
                  text-gray-700
                "
              >
                {finish}
              </span>
            )
          )}
        </div>
      </div>

      {/* Sizes */}

      <div>
        <p className="text-sm font-medium text-gray-500 mb-3">
          Available Sizes
        </p>

        <div className="flex flex-wrap gap-3">
          {product.availableSizes.map(
            (size: string) => (
              <span
                key={size}
                className="
                  px-4
                  py-2
                  rounded-full
                  bg-gray-100
                  text-sm
                  text-gray-700
                "
              >
                {size}
              </span>
            )
          )}
        </div>
      </div>
    </div>
  );
}