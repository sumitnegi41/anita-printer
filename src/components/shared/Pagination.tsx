type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (
    page: number
  ) => void;
};

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="mt-6 flex items-center justify-center gap-2">
      {Array.from(
        { length: totalPages },
        (_, index) => {
          const page = index + 1;

          return (
            <button
              key={page}
              onClick={() =>
                onPageChange(page)
              }
              className={`rounded-md border px-3 py-2 text-sm transition ${
                currentPage === page
                  ? "bg-gray-900 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {page}
            </button>
          );
        }
      )}
    </div>
  );
}