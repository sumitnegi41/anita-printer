import FormSection from "@/components/forms/FormSection";
import InputField from "@/components/forms/InputField";
import SelectField from "@/components/forms/SelectField";
import TextareaField from "@/components/forms/TextareaField";

import { orders } from "@/constants/orders";

import { notFound } from "next/navigation";

type OrderEditPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function OrderEditPage({
  params,
}: OrderEditPageProps) {
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
            Edit Order
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Update order details and
            production workflow.
          </p>
        </div>

        <button
          className="
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
          Update Order
        </button>
      </div>

      {/* Main Grid */}

      <div className="grid grid-cols-2 gap-8">
        {/* Left Column */}

        <div className="space-y-8">
          {/* Customer Information */}

          <FormSection title="Customer Information">
            <InputField
              label="Customer Name"
              defaultValue={order.customerName}
            />

            <InputField
              label="Phone Number"
              defaultValue={order.customerPhone}
            />

            <InputField
              label="Email Address"
              defaultValue={
                order.customerEmail
              }
              type="email"
            />
          </FormSection>

          {/* Order Information */}

          <FormSection title="Order Information">
            <InputField
              label="Order Number"
              defaultValue={order.orderNumber}
            />

            <InputField
              label="Product"
              defaultValue={order.productName}
            />

            <InputField
              label="Quantity"
              defaultValue={String(
                order.quantity
              )}
              type="number"
            />

            <InputField
              label="Final Price"
              defaultValue={String(
                order.finalPrice ?? ""
              )}
              type="number"
            />
          </FormSection>
        </div>

        {/* Right Column */}

        <div className="space-y-8">
          {/* Production Workflow */}

          <FormSection title="Production Workflow">
            <SelectField
              label="Order Status"
              options={[
                "new",
                "approved",
                "in_production",
                "printing",
                "quality_check",
                "completed",
                "dispatched",
                "cancelled",
              ]}
            />

            <SelectField
              label="Priority"
              options={[
                "low",
                "medium",
                "high",
              ]}
            />

            <InputField
              label="Assigned To"
              defaultValue={
                order.assignedTo
              }
            />

            <InputField
              label="Expected Delivery Date"
              defaultValue={
                order.expectedDeliveryDate
              }
              type="date"
            />
          </FormSection>

          {/* Production Notes */}

          <FormSection title="Production Notes">
            <TextareaField
              label="Production Instructions"
              defaultValue={
                order.productionNotes
              }
              placeholder="Update manufacturing instructions..."
            />
          </FormSection>
        </div>
      </div>
    </div>
  );
}