import SearchInput from "@/components/shared/SearchInput";

type InquiryFiltersProps = {
  searchTerm: string;
  onSearchChange: (
    value: string
  ) => void;

  selectedStatus: string;
  onStatusChange: (
    value: string
  ) => void;

  hasActiveFilters: boolean;
  onClearFilters: () => void;
};

const inquiryStatuses = [
  {
    value: "all",
    label: "All Status",
  },
  {
    value: "new",
    label: "New",
  },
  {
    value: "pending",
    label: "Pending",
  },
  {
    value: "quoted",
    label: "Quoted",
  },
];

export default function InquiryFilters({
  searchTerm,
  onSearchChange,
  selectedStatus,
  onStatusChange,
  hasActiveFilters,
  onClearFilters,
}: InquiryFiltersProps) {
  return (
    <div className="flex items-center justify-between mb-6">
      <SearchInput
        value={searchTerm}
        onChange={onSearchChange}
        placeholder="Search inquiries..."
      />

      <div className="flex items-center gap-3">
        <select
          value={selectedStatus}
          onChange={(e) =>
            onStatusChange(
              e.target.value
            )
          }
          className="h-12 rounded-xl border border-gray-200 bg-white px-4 text-sm outline-none focus:ring-2 focus:ring-blue-500"
        >
          {inquiryStatuses.map(
            (status) => (
              <option
                key={
                  status.value
                }
                value={
                  status.value
                }
              >
                {status.label}
              </option>
            )
          )}
        </select>

        {hasActiveFilters && (
          <button
            onClick={
              onClearFilters
            }
            className="h-12 px-4 rounded-xl border border-gray-200 bg-white text-sm font-medium hover:bg-gray-50"
          >
            Clear Filters
          </button>
        )}
      </div>
    </div>
  );
}
