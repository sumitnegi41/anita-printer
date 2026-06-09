import type { Category } from "@/types/category";

import CategoryTableRow from "./CategoryTableRow";

type CategoriesTableProps = {
  categories: Category[];
};

export default function CategoriesTable({
  categories,
}: CategoriesTableProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr className="border-b border-gray-100">
            <th className="w-[20%] text-left px-4 py-4 text-sm font-semibold text-gray-600">
              Category
            </th>

            <th className="w-[20%] text-left px-4 py-4 text-sm font-semibold text-gray-600">
              Slug
            </th>

            <th className="w-[35%] text-left px-4 py-4 text-sm font-semibold text-gray-600">
              Description
            </th>

            <th className="w-[15%] text-left px-4 py-4 text-sm font-semibold text-gray-600">
              Status
            </th>

            <th className="w-[10%] text-left px-4 py-4 text-sm font-semibold text-gray-600">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {categories.map((category) => (
            <CategoryTableRow
              key={category.id}
              id={category.id}
              name={category.name}
              slug={category.slug}
              description={category.description}
              status={category.status}
              createdAt={category.createdAt}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}