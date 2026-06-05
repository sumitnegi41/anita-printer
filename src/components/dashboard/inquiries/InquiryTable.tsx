import InquiryTableRow from "./InquiryTableRow";
import { inquiries } from "@/constants/inquiries";

export default function InquiryTable() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr className="border-b border-gray-100">
            <th className="w-[35%] text-left px-4 py-4 text-sm font-semibold text-gray-600">
              Company
            </th>

            <th className="w-[35%] text-left px-4 py-4 text-sm font-semibold text-gray-600">
              Product
            </th>

            <th className="w-[15%] text-left px-4 py-4 text-sm font-semibold text-gray-600">
              Status
            </th>

            <th className="w-[15%] text-left px-4 py-4 text-sm font-semibold text-gray-600">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {inquiries.map((inquiry) => (
            <InquiryTableRow
              key={inquiry.id}
              id={inquiry.id}
              company={inquiry.company}
              product={inquiry.product}
              date={inquiry.date}
              status={inquiry.status}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}