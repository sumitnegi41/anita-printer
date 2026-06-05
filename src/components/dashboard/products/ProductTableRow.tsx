import StatusBadge from "@/components/ui/StatusBadge";
import TableActions from "@/components/ui/TableActions";
import { ProductStatus } from "@/types/status";

type ProductTableRowProps = {
  id: number;
  name: string;
  category: string;
  status: ProductStatus;
  minimumOrderQty: number;
  featuredImage: string;
  createdAt: string;
};

export default function ProductTableRow({
  id,
  name,
  category,
  status,
  minimumOrderQty,
  featuredImage,
  createdAt,
}: ProductTableRowProps) {
  return (
    <tr className="border-b border-gray-100 transition hover:bg-gray-50">
      {/* Product */}

      <td className="px-4 py-5">
        <div className="flex items-center gap-4">
          <div className="h-14 w-14 flex-shrink-0 overflow-hidden rounded-xl bg-gray-100">
            <img
              src={featuredImage}
              alt={name}
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <p className="font-medium text-gray-800">{name}</p>

            <p className="mt-1 text-xs text-gray-400">{createdAt}</p>
          </div>
        </div>
      </td>

      {/* Category */}

      <td className="px-4 py-5 text-sm text-gray-700">{category}</td>

      {/* MOQ */}

      <td className="px-4 py-5 text-sm text-gray-700">
        {minimumOrderQty}
      </td>

      {/* Status */}

      <td className="px-4 py-5">
        <StatusBadge status={status} />
      </td>

      {/* Actions */}

      <td className="px-4 py-5">
        <TableActions
          viewHref={`/admin/products/${id}`}
          editHref={`/admin/products/${id}/edit`}
        />
      </td>
    </tr>
  );
}