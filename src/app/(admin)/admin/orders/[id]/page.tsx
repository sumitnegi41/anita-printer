import Link from "next/link";
import { notFound } from "next/navigation";

import { orders } from "@/constants/orders";

type OrderDetailsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function OrderDetailsPage({
  params,
}: OrderDetailsPageProps) {
  const { id } = await params;

  const order = orders.find(
    (item) => item.id === id
  );

  if (!order) {
    notFound();
  }

  return (
    <div>
      {/* Header */}

      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            {order.orderNumber}
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Order details and production workflow information.
          </p>
        </div>

        <Link
          href={`/admin/orders/${order.id}/edit`}
          className="
            inline-flex
            items-center
            h-11
            px-6
            rounded-xl
            bg-[#07122B]
            text-white
            text-sm
            font-medium
            hover:opacity-95
          "
        >
          Edit Order
        </Link>
      </div>

      {/* Main Grid */}

      <div className="grid grid-cols-3 gap-8">
        {/* Left */}

        <div className="col-span-2 space-y-6">
          {/* Customer Information */}

          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">
              Customer Information
            </h2>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-gray-500">
                  Customer Name
                </p>

                <p className="mt-1 font-medium text-gray-800">
                  {order.customerName}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Phone Number
                </p>

                <p className="mt-1 font-medium text-gray-800">
                  {order.customerPhone}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Email Address
                </p>

                <p className="mt-1 font-medium text-gray-800">
                  {order.customerEmail}
                </p>
              </div>
            </div>
          </div>

          {/* Order Information */}

          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">
              Order Information
            </h2>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-gray-500">
                  Product
                </p>

                <p className="mt-1 font-medium text-gray-800">
                  {order.productName}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Quantity
                </p>

                <p className="mt-1 font-medium text-gray-800">
                  {order.quantity}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Final Price
                </p>

                <p className="mt-1 font-medium text-gray-800">
                  ₹{order.finalPrice}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Priority
                </p>

                <p className="mt-1 font-medium text-gray-800 capitalize">
                  {order.priority}
                </p>
              </div>
            </div>
          </div>

          {/* Production Notes */}

          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">
              Production Notes
            </h2>

            <p className="text-sm leading-7 text-gray-700">
              {order.productionNotes}
            </p>
          </div>
        </div>

        {/* Right */}

        <div className="space-y-6">
          {/* Workflow Status */}

          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">
              Workflow Status
            </h2>

            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  Current Status
                </span>

                <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600 capitalize">
                  {order.status.replaceAll(
                    "_",
                    " "
                  )}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  Assigned To
                </span>

                <span className="text-sm font-medium text-gray-800">
                  {order.assignedTo}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  Delivery Date
                </span>

                <span className="text-sm font-medium text-gray-800">
                  {order.expectedDeliveryDate}
                </span>
              </div>
            </div>
          </div>

          {/* Timeline */}

          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">
              Timeline
            </h2>

            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  Created At
                </span>

                <span className="text-sm font-medium text-gray-800">
                  {order.createdAt}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  Last Updated
                </span>

                <span className="text-sm font-medium text-gray-800">
                  {order.updatedAt}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}