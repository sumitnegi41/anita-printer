"use client";

import { Plus } from "lucide-react";
import Link from "next/link";

import SearchInput from "@/components/shared/SearchInput";
import { categories } from "@/constants/categories";

type ProductFiltersProps = {
  searchTerm: string;
  onSearchChange: (value: string) => void;

  selectedCategory: string;
  onCategoryChange: (value: string) => void;

  hasActiveFilters: boolean;
  onClearFilters: () => void;
};

export default function ProductFilters({
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  hasActiveFilters,
  onClearFilters,
}: ProductFiltersProps) {
  return (
    <div className="flex items-center justify-between mb-6">
      {/* Search */}

      <SearchInput
        value={searchTerm}
        onChange={onSearchChange}
        placeholder="Search products..."
      />

      {/* Actions */}

      <div className="flex items-center gap-3">
        <select
          value={selectedCategory}
          onChange={(e) =>
            onCategoryChange(e.target.value)
          }
          className="h-12 rounded-xl border border-gray-200 bg-white px-4 text-sm outline-none focus:ring-2 focus:ring-blue-500"
        >
          {categories.map((category) => (
            <option
              key={category.id}
              value={category.slug}
            >
              {category.name}
            </option>
          ))}
        </select>

        {hasActiveFilters && (
          <button
            onClick={onClearFilters}
            className="h-12 px-4 rounded-xl border border-gray-200 bg-white text-sm font-medium hover:bg-gray-50"
          >
            Clear Filters
          </button>
        )}

        <Link
          href="/admin/products/create"
          className="inline-flex items-center gap-2 h-12 px-5 rounded-xl bg-[#07122B] text-white text-sm font-medium hover:opacity-95"
        >
          <Plus size={18} />
          Add Product
        </Link>
      </div>
    </div>
  );
}