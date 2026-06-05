import OrdersFilters from "@/components/dashboard/orders/OrdersFilters";
import OrdersTable from "@/components/dashboard/orders/OrdersTable";
import PageHeader from "@/components/shared/PageHeader";

export default function OrdersPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Orders"
        subtitle="Manage and track manufacturing orders."
      />

      <OrdersFilters />

      <OrdersTable />
    </div>
  );
}