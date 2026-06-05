import FormSection from "@/components/forms/FormSection";
import InputField from "@/components/forms/InputField";
import SelectField from "@/components/forms/SelectField";
import TextareaField from "@/components/forms/TextareaField";

export default function CreateOrderPage() {
  return (
    <div>
      {/* Header */}

      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Create Order
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Create and manage production orders.
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
          Save Order
        </button>
      </div>

      {/* Main Grid */}

      <div className="grid grid-cols-2 gap-8">
        {/* Customer Information */}

        <FormSection title="Customer Information">
          <InputField
            label="Company Name"
            placeholder="Enter company name"
          />

          <InputField
            label="Contact Person"
            placeholder="Enter contact person"
          />

          <InputField
            label="Phone Number"
            placeholder="Enter phone number"
          />

          <InputField
            label="Email Address"
            placeholder="Enter email address"
            type="email"
          />
        </FormSection>

        {/* Order Information */}

        <FormSection title="Order Information">
          <SelectField
            label="Product Type"
            options={[
              "Woven Labels",
              "Heat Transfer",
              "Printed Labels",
              "Custom Packaging Boxes",
              "Hang Tags",
            ]}
          />

          <InputField
            label="Quantity"
            placeholder="Enter quantity"
            type="number"
          />

          <InputField
            label="Final Price"
            placeholder="Enter final price"
            type="number"
          />

          <SelectField
            label="Priority"
            options={[
              "Low",
              "Medium",
              "High",
            ]}
          />

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

          <InputField
            label="Expected Delivery Date"
            type="date"
          />

          <InputField
            label="Assigned To"
            placeholder="Enter production manager name"
          />
        </FormSection>
      </div>

      {/* Additional Notes */}

      <div className="mt-8">
        <FormSection title="Additional Notes">
          <TextareaField
            label="Production Notes"
            placeholder="Write production instructions..."
          />
        </FormSection>
      </div>
    </div>
  );
}