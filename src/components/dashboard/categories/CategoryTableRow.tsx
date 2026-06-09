import type { Category } from "@/types/category";

import StatusBadge from "@/components/ui/StatusBadge";
import TableActions from "@/components/ui/TableActions";
import DeleteCategoryButton from "./DeleteCategoryButton";

type CategoryTableRowProps = Pick<
  Category,
  | "id"
  | "name"
  | "slug"
  | "description"
  | "status"
  | "createdAt"
>;

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
      <td className="py-5 px-4">
        <div>
          <p className="font-medium text-gray-800">
            {name}
          </p>

          <p className="text-xs text-gray-400 mt-1">
            {createdAt.toLocaleDateString()}
          </p>
        </div>
      </td>

      <td className="py-5 px-4 text-sm text-gray-700">
        {slug}
      </td>

      <td className="py-5 px-4 text-sm text-gray-600 max-w-sm">
        {description ?? "-"}
      </td>

      <td className="py-5 px-4">
        <StatusBadge
          status={status as "active" | "inactive"}
        />
      </td>

      <td className="py-5 px-4">
      <div className="flex items-center gap-2">
        <TableActions
          viewHref={`/admin/categories/${id}`}
          editHref={`/admin/categories/${id}/edit`}
        />
        <DeleteCategoryButton
          categoryId={id}
        />
      </div>
    </td>
    </tr>
  );
}