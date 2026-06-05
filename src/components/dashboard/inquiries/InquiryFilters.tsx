import { Search, SlidersHorizontal } from "lucide-react";

export default function InquiryFilters() {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="relative w-80">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search inquiries..."
          className="
            w-full
            h-11
            pl-10
            pr-4
            rounded-xl
            border
            border-gray-200
            bg-white
            text-sm
            outline-none
            focus:ring-2
            focus:ring-blue-500
          "
        />
      </div>

      <button
        className="
          flex
          items-center
          gap-2
          h-11
          px-4
          rounded-xl
          border
          border-gray-200
          bg-white
          text-sm
          font-medium
          hover:bg-gray-50
        "
      >
        <SlidersHorizontal size={16} />
        Filter
      </button>
    </div>
  );
}