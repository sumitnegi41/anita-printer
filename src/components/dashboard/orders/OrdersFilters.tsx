import { Plus } from "lucide-react";
import Link from "next/link";

import SearchInput from "@/components/shared/SearchInput";
import { orderStatuses } from "@/constants/orders";

type OrdersFiltersProps = {
  searchTerm: string;
  onSearchChange: (value: string) => void;

  selectedStatus: string;
  onStatusChange: (value: string) => void;

  hasActiveFilters: boolean;
  onClearFilters: () => void;
};

export default function OrdersFilters({
  searchTerm,
  onSearchChange,
  selectedStatus,
  onStatusChange,
  hasActiveFilters,
  onClearFilters,
}: OrdersFiltersProps) {
  return (
    <div className="flex items-center justify-between mb-6">
      <SearchInput
        value={searchTerm}
        onChange={onSearchChange}
        placeholder="Search orders..."
      />

      <div className="flex items-center gap-3">
        <select
          value={selectedStatus}
          onChange={(e) =>
            onStatusChange(e.target.value)
          }
          className="h-12 rounded-xl border border-gray-200 bg-white px-4 text-sm outline-none focus:ring-2 focus:ring-blue-500"
        >
          {orderStatuses.map((status) => (
            <option
              key={status.value}
              value={status.value}
            >
              {status.label}
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
          href="/admin/orders/create"
          className="inline-flex items-center gap-2 h-12 px-5 rounded-xl bg-[#07122B] text-white text-sm font-medium hover:opacity-95"
        >
          <Plus size={18} />
          Create Order
        </Link>
      </div>
    </div>
  );
}