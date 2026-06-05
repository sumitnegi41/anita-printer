import DetailItem from "@/components/ui/DetailItem";
import StatusBadge from "@/components/ui/StatusBadge";

type Props = {
  product: any;
};

export default function ProductInfoCard({
  product,
}: Props) {
  return (
    <div
      className="
        bg-white
        rounded-2xl
        border
        border-gray-100
        shadow-sm
        p-8
      "
    >
      <h2 className="text-xl font-semibold text-gray-900 mb-6">
        Product Information
      </h2>

      <div className="space-y-5">
        <DetailItem label="Product Name">
          {product.name}
        </DetailItem>

        <DetailItem label="Slug">
          {product.slug}
        </DetailItem>

        <DetailItem label="Category">
          {product.category}
        </DetailItem>

        <DetailItem label="Minimum Order Quantity">
          {product.minimumOrderQty} Units
        </DetailItem>

        <DetailItem label="Status">
          <StatusBadge status={product.status} />
        </DetailItem>

        <DetailItem label="Created At">
          {product.createdAt}
        </DetailItem>

        <DetailItem label="Updated At">
          {product.updatedAt}
        </DetailItem>
      </div>
    </div>
  );
}