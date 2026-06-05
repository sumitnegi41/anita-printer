import {
  InquiryStatus,
  ProductStatus,
  OrderStatus,
  CategoryStatus,
} from "@/types/status";

type StatusBadgeProps = {
  status:
    | InquiryStatus
    | ProductStatus
    | OrderStatus
    | CategoryStatus;
};

const statusStyles: Record<
  | InquiryStatus
  | ProductStatus
  | OrderStatus
  | CategoryStatus,
  string
> = {
  /* Inquiry Status */

  New: "bg-green-50 text-green-600",

  Pending: "bg-yellow-50 text-yellow-600",

  Quoted: "bg-blue-50 text-blue-600",

  Approved: "bg-purple-50 text-purple-600",

  Rejected: "bg-red-50 text-red-600",

  /* Product Status */

  active: "bg-green-50 text-green-600",

  draft: "bg-yellow-50 text-yellow-600",

  archived: "bg-gray-100 text-gray-600",

  /* Order Status */

  new: "bg-blue-50 text-blue-600",

  approved: "bg-purple-50 text-purple-600",

  in_production:
    "bg-orange-50 text-orange-600",

  printing: "bg-cyan-50 text-cyan-600",

  quality_check:
    "bg-yellow-50 text-yellow-700",

  completed: "bg-green-50 text-green-600",

  dispatched: "bg-indigo-50 text-indigo-600",

  cancelled: "bg-red-50 text-red-600",

  /* Category Status */

  inactive: "bg-gray-100 text-gray-600",
};

export default function StatusBadge({
  status,
}: StatusBadgeProps) {
  return (
    <span
      className={`
        inline-flex
        items-center
        rounded-full
        px-3
        py-1
        text-xs
        font-medium
        capitalize
        ${statusStyles[status]}
      `}
    >
      {status.replaceAll("_", " ")}
    </span>
  );
}