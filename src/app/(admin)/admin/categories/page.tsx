import CategoriesTable from "@/components/dashboard/categories/CategoriesTable";
import PageHeader from "@/components/shared/PageHeader";
import { getCategories } from "@/services/category.service";
import CategoriesFilters from "@/components/dashboard/categories/CategoriesFilters";
import Pagination from "@/components/shared/Pagination";

type CategoriesPageProps = {
  searchParams: Promise<{
    search?: string;
    status?: string;
    page?: string;
  }>;
};

export default async function CategoriesPage({
  searchParams,
}: CategoriesPageProps) {
  const params = await searchParams;

  const result = await getCategories({
    search: params.search,
    status: params.status,
    page: Number(params.page) || 1,
  });

  return (
    <div className="space-y-6">
      <PageHeader
        title="Categories"
        subtitle="Manage product categories and manufacturing groups."
      />
      <CategoriesFilters />
      <p className="text-sm text-gray-500">
        Showing {result.totalCount} categories
      </p>

      <CategoriesTable
        categories={result.categories}
      />
      <Pagination
        currentPage={result.currentPage}
        totalPages={result.totalPages}
      />
    </div>
  );
}