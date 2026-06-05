import ProductTableRow from "./ProductTableRow";
import { Product } from "@/constants/products";
type ProductTableProps = {
  products: Product[];
};

export default function ProductTable({
  products,
}: ProductTableProps) {
  if (products.length === 0) {
    return (
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-12 text-center">
        <h3 className="text-lg font-semibold text-gray-900">
          No products found
        </h3>

        <p className="mt-2 text-sm text-gray-500">
          Try changing your search term or filters.
        </p>
      </div>
    );
  }
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr className="border-b border-gray-100">
            <th className="w-[40%] text-left px-4 py-4 text-sm font-semibold text-gray-600">
              Product
            </th>

            <th className="w-[20%] text-left px-4 py-4 text-sm font-semibold text-gray-600">
              Category
            </th>

            <th className="w-[15%] text-left px-4 py-4 text-sm font-semibold text-gray-600">
              MOQ
            </th>

            <th className="w-[15%] text-left px-4 py-4 text-sm font-semibold text-gray-600">
              Status
            </th>

            <th className="w-[10%] text-left px-4 py-4 text-sm font-semibold text-gray-600">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <ProductTableRow
              key={product.id}
              id={product.id}
              name={product.name}
              category={product.category}
              status={product.status}
              minimumOrderQty={product.minimumOrderQty}
              featuredImage={product.featuredImage}
              createdAt={product.createdAt}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}