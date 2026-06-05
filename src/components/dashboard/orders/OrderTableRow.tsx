import StatusBadge from "@/components/ui/StatusBadge";
import TableActions from "@/components/ui/TableActions";
import { OrderStatus } from "@/types/status";

type OrderTableRowProps = {
  id: string;

  orderNumber: string;

  customerName: string;

  productName: string;

  quantity: number;

  status: OrderStatus;
};

export default function OrderTableRow({
  id,
  orderNumber,
  customerName,
  productName,
  quantity,
  status,
}: OrderTableRowProps) {
  return (
    <tr className="border-b border-gray-100 hover:bg-gray-50 transition">
      {/* Order */}

      <td className="py-5 px-4">
        <div>
          <p className="font-medium text-gray-800">
            {orderNumber}
          </p>

          <p className="text-xs text-gray-400 mt-1">
            Manufacturing Order
          </p>
        </div>
      </td>

      {/* Customer */}

      <td className="py-5 px-4">
        <p className="text-sm font-medium text-gray-700">
          {customerName}
        </p>
      </td>

      {/* Product */}

      <td className="py-5 px-4 text-sm text-gray-700">
        {productName}
      </td>

      {/* Quantity */}

      <td className="py-5 px-4 text-sm text-gray-700">
        {quantity}
      </td>

      {/* Status */}

      <td className="py-5 px-4">
        <StatusBadge status={status} />
      </td>

      {/* Actions */}

      <td className="py-5 px-4">
        <TableActions
          viewHref={`/admin/orders/${id}`}
          editHref={`/admin/orders/${id}/edit`}
        />
      </td>
    </tr>
  );
}