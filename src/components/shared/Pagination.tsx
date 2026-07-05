"use client";

import Link from "next/link";
import {
  usePathname,
  useSearchParams,
} from "next/navigation";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
};

export default function Pagination({
  currentPage,
  totalPages,
}: PaginationProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  if (totalPages <= 1) {
    return null;
  }

  function createPageUrl(page: number) {
    const params = new URLSearchParams(
      searchParams.toString()
    );

    params.set("page", String(page));

    return `${pathname}?${params.toString()}`;
  }

  return (
    <div className="mt-6 flex items-center justify-center gap-2">
      {Array.from(
        { length: totalPages },
        (_, index) => {
          const page = index + 1;
          const isActive = currentPage === page;

          return (
            <Link
              key={page}
              href={createPageUrl(page)}
              className={`rounded-md border px-3 py-2 text-sm transition ${
                isActive
                  ? "bg-gray-900 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {page}
            </Link>
          );
        }
      )}
    </div>
  );
}