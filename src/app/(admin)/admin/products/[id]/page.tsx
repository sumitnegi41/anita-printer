import ProductInfoCard from "@/components/dashboard/products/ProductInfoCard";
import ProductManufacturingCard from "@/components/dashboard/products/ProductManufacturingCard";
import ProductSeoCard from "@/components/dashboard/products/ProductSeoCard";
import ProductMediaCard from "@/components/dashboard/products/ProductMediaCard";
import ProductStatusCard from "@/components/dashboard/products/ProductStatusCard";
import { products } from "@/constants/products";
import { notFound } from "next/navigation";
import Link from "next/link";

type ProductDetailsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductDetailsPage({
  params,
}: ProductDetailsPageProps) {
  const { id } = await params;

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    notFound();
  }

  return (
    <div>
      {/* Header */}

      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            {product.name}
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Product details and manufacturing information.
          </p>
        </div>

      <Link
        href={`/admin/products/${product.id}/edit`}
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
        Edit Product
      </Link>
      </div>

      {/* Main Grid */}

      <div className="grid grid-cols-3 gap-8">
        {/* Left */}

      <div className="col-span-2">
        <ProductInfoCard product={product} />

        <ProductManufacturingCard
          product={product}
        />

         <ProductSeoCard product={product} />
      </div>

        {/* Right */}

        <div>
          <ProductMediaCard product={product} />
          <ProductStatusCard product={product} />
        </div>
      </div>
    </div>
  );
}