import { Eye, Pencil } from "lucide-react";
import Link from "next/link";

type TableActionsProps = {
  viewHref: string;
  editHref?: string;
};

export default function TableActions({
  viewHref,
  editHref,
}: TableActionsProps) {
  return (
    <div className="flex items-center gap-2">
      <Link
        href={viewHref}
        className="flex items-center justify-center w-9 h-9 rounded-lg border border-gray-200 bg-white text-gray-600 transition-all hover:bg-gray-100 hover:border-gray-300"
      >
        <Eye size={16} />
      </Link>

      <Link
        href={editHref || "#"}
        className="flex items-center justify-center w-9 h-9 rounded-lg border border-gray-200 bg-white text-gray-600 transition-all hover:bg-gray-100 hover:border-gray-300"
      >
        <Pencil size={16} />
      </Link>
    </div>
  );
}