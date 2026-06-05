import StatusBadge from "@/components/ui/StatusBadge";
import TableActions from "@/components/ui/TableActions";

import { CategoryStatus } from "@/types/status";

type CategoryTableRowProps = {
  id: number;

  name: string;

  slug: string;

  description: string;

  status: CategoryStatus;

  createdAt: string;
};

export default function CategoryTableRow({
  id,
  name,
  slug,
  description,
  status,
  createdAt,
}: CategoryTableRowProps) {
  return (
    <tr className="border-b border-gray-100 hover:bg-gray-50 transition">
      {/* Category */}

      <td className="py-5 px-4">
        <div>
          <p className="font-medium text-gray-800">
            {name}
          </p>

          <p className="text-xs text-gray-400 mt-1">
            {createdAt}
          </p>
        </div>
      </td>

      {/* Slug */}

      <td className="py-5 px-4 text-sm text-gray-700">
        {slug}
      </td>

      {/* Description */}

      <td className="py-5 px-4 text-sm text-gray-600 max-w-sm">
        {description}
      </td>

      {/* Status */}

      <td className="py-5 px-4">
        <StatusBadge status={status} />
      </td>

      {/* Actions */}

      <td className="py-5 px-4">
        <TableActions
          viewHref={`/admin/categories/${id}`}
          editHref={`/admin/categories/${id}/edit`}
        />
      </td>
    </tr>
  );
}