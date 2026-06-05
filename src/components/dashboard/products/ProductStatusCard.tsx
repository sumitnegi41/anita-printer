import StatusBadge from "@/components/ui/StatusBadge";

type Props = {
  product: any;
};

export default function ProductStatusCard({
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
        p-6
        mt-8
      "
    >
      <h2 className="text-lg font-semibold text-gray-900 mb-5">
        Product Status
      </h2>

      {/* Current Status */}

      <div className="mb-6">
        <p className="text-sm text-gray-500 mb-2">
          Current Status
        </p>

        <StatusBadge status={product.status} />
      </div>

      {/* Actions */}

      <div className="space-y-3">
        <button
          className="
            w-full
            h-11
            rounded-xl
            border
            border-gray-200
            bg-white
            text-sm
            font-medium
            hover:bg-gray-50
          "
        >
          Archive Product
        </button>

        <button
          className="
            w-full
            h-11
            rounded-xl
            border
            border-red-100
            bg-red-50
            text-red-600
            text-sm
            font-medium
            hover:bg-red-100
          "
        >
          Delete Product
        </button>
      </div>
    </div>
  );
}