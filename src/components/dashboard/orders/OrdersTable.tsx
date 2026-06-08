import { Order } from "@/types/order";
import OrderTableRow from "./OrderTableRow";

type OrdersTableProps = {
  orders: Order[];
};

export default function OrdersTable({
  orders,
}: OrdersTableProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr className="border-b border-gray-100">
            <th className="w-[15%] text-left px-4 py-4 text-sm font-semibold text-gray-600">
              Order ID
            </th>

            <th className="w-[25%] text-left px-4 py-4 text-sm font-semibold text-gray-600">
              Customer
            </th>

            <th className="w-[20%] text-left px-4 py-4 text-sm font-semibold text-gray-600">
              Product
            </th>

            <th className="w-[10%] text-left px-4 py-4 text-sm font-semibold text-gray-600">
              Quantity
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
          {orders.map((order) => (
            <OrderTableRow
              key={order.id}
              id={order.id}
              orderNumber={order.orderNumber}
              customerName={order.customerName}
              productName={order.productName}
              quantity={order.quantity}
              status={order.status}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}