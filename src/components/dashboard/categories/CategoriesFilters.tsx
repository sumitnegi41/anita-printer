import { Plus, Search } from "lucide-react";
import Link from "next/link";

export default function CategoriesFilters() {
  return (
    <div className="flex items-center justify-between mb-6">
      {/* Search */}

      <div className="relative">
        <Search
          size={18}
          className="
            absolute
            left-4
            top-1/2
            -translate-y-1/2
            text-gray-400
          "
        />

        <input
          type="text"
          placeholder="Search categories..."
          className="
            w-96
            h-12
            rounded-xl
            border
            border-gray-200
            bg-white
            pl-11
            pr-4
            text-sm
            outline-none
            focus:ring-2
            focus:ring-blue-500
          "
        />
      </div>

      {/* Actions */}

      <div className="flex items-center gap-3">
        <select
          className="
            h-12
            rounded-xl
            border
            border-gray-200
            bg-white
            px-4
            text-sm
            outline-none
            focus:ring-2
            focus:ring-blue-500
          "
        >
          <option>All Status</option>

          <option>Active</option>

          <option>Inactive</option>
        </select>

        <Link
          href="/admin/categories/create"
          className="
            inline-flex
            items-center
            gap-2
            h-12
            px-5
            rounded-xl
            bg-[#07122B]
            text-white
            text-sm
            font-medium
            hover:opacity-95
          "
        >
          <Plus size={18} />

          Add Category
        </Link>
      </div>
    </div>
  );
}