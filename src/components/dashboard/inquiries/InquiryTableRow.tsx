import StatusBadge from "@/components/ui/StatusBadge";
import TableActions from "@/components/ui/TableActions";
import { InquiryStatus } from "@/types/status";

type InquiryTableRowProps = {
  id: number;
  company: string;
  product: string;
  date: string;
  status: InquiryStatus;
};

export default function InquiryTableRow({
  id,
  company,
  product,
  date,
  status,
}: InquiryTableRowProps) {
  return (
    <tr className="border-b border-gray-100 hover:bg-gray-50 transition">
      <td className="py-5 px-4 w-[35%]">
        <div>
          <p className="font-medium text-gray-800">
            {company}
          </p>

          <p className="text-xs text-gray-400 mt-1">
            {date}
          </p>
        </div>
      </td>

      <td className="py-5 px-4 text-sm text-gray-700 w-[35%]">
        {product}
      </td>

      <td className="py-5 px-4 w-[15%]">
        <StatusBadge status={status} />
      </td>

      <td className="py-5 px-4 w-[15%]">
       <TableActions
          viewHref={`/admin/inquiries/${id}`}
        />
      </td>
    </tr>
  );
}