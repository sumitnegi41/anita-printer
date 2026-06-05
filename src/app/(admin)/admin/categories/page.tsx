import CategoriesFilters from "@/components/dashboard/categories/CategoriesFilters";
import CategoriesTable from "@/components/dashboard/categories/CategoriesTable";
import PageHeader from "@/components/shared/PageHeader";

export default function CategoriesPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Categories"
        subtitle="Manage product categories and manufacturing groups."
      />

      <CategoriesFilters />

      <CategoriesTable />
    </div>
  );
}