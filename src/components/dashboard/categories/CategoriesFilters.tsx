"use client";

import { Plus } from "lucide-react";
import Link from "next/link";

import {
  useRouter,
  useSearchParams,
} from "next/navigation";

import SearchInput from "@/components/shared/SearchInput";

export default function CategoriesFilters() {
  const router = useRouter();

  const searchParams =
    useSearchParams();

  const search =
    searchParams.get("search") ?? "";

  const status =
    searchParams.get("status") ?? "all";

  function handleSearch(
    value: string
  ) {
    const params =
      new URLSearchParams(
        searchParams.toString()
      );

    if (value) {
      params.set(
        "search",
        value
      );
    } else {
      params.delete(
        "search"
      );
    }

    params.delete("page");

    router.push(
      `/admin/categories?${params.toString()}`
    );
  }

  function handleStatusChange(
    value: string
  ) {
    const params =
      new URLSearchParams(
        searchParams.toString()
      );

    if (
      value &&
      value !== "all"
    ) {
      params.set(
        "status",
        value
      );
    } else {
      params.delete(
        "status"
      );
    }

    params.delete("page");

    router.push(
      `/admin/categories?${params.toString()}`
    );
  }

  function handleClearFilters() {
    router.push(
      "/admin/categories"
    );
  }

  const hasActiveFilters =
    search !== "" ||
    status !== "all";

  return (
    <div className="flex items-center justify-between mb-6">
      <SearchInput
        value={search}
        onChange={handleSearch}
        placeholder="Search categories..."
      />

      <div className="flex items-center gap-3">
        <select
          value={status}
          onChange={(e) =>
            handleStatusChange(
              e.target.value
            )
          }
          className="h-12 rounded-xl border border-gray-200 bg-white px-4 text-sm outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">
            All Status
          </option>

          <option value="active">
            Active
          </option>

          <option value="inactive">
            Inactive
          </option>
        </select>

        {hasActiveFilters && (
          <button
            type="button"
            onClick={
              handleClearFilters
            }
            className="h-12 px-4 rounded-xl border border-gray-200 bg-white text-sm font-medium hover:bg-gray-50"
          >
            Clear Filters
          </button>
        )}

        <Link
          href="/admin/categories/create"
          className="inline-flex items-center gap-2 h-12 px-5 rounded-xl bg-[#07122B] text-white text-sm font-medium hover:opacity-95"
        >
          <Plus size={18} />
          Add Category
        </Link>
      </div>
    </div>
  );
}