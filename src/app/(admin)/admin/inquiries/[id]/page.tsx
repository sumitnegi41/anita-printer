import DetailItem from "@/components/ui/DetailItem";
import StatusBadge from "@/components/ui/StatusBadge";

type InquiryDetailsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function InquiryDetailsPage({
  params,
}: InquiryDetailsPageProps) {
  const { id } = await params;

  return (
    <div>
      <div className="flex items-start justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Inquiry Details
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Review inquiry information and manage quotation process.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            className="
              h-11
              px-5
              rounded-xl
              border
              border-gray-200
              bg-white
              text-sm
              font-medium
              hover:bg-gray-50
            "
          >
            Send Quotation
          </button>

          <button
            className="
              h-11
              px-5
              rounded-xl
              bg-[#07122B]
              text-white
              text-sm
              font-medium
              hover:opacity-95
            "
          >
            Mark as Confirmed
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
        <div className="grid grid-cols-2 gap-10">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-6">
              Customer Information
            </h2>

            <div className="space-y-5">
              <DetailItem label="Company Name">
                H&M Fashion
              </DetailItem>

              <DetailItem label="Contact Person">
                Rahul Sharma
              </DetailItem>

              <DetailItem label="Email Address">
                rahul@hmfashion.com
              </DetailItem>

              <DetailItem label="Phone Number">
                +91 9876543210
              </DetailItem>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-6">
              Inquiry Information
            </h2>

            <div className="space-y-5">
              <DetailItem label="Inquiry ID">
                #{id}
              </DetailItem>

              <DetailItem label="Product Type">
                Woven Labels
              </DetailItem>

              <DetailItem label="Quantity">
                5,000 Pieces
              </DetailItem>

              <DetailItem label="Status">
                <StatusBadge status="New" />
              </DetailItem>
              <div className="pt-6 border-t border-gray-100">
  <p className="text-sm font-medium text-gray-700 mb-4">
    Quick Actions
  </p>

  <div className="flex items-center gap-3">
    <button
      className="
        h-10
        px-4
        rounded-xl
        border
        border-gray-200
        bg-white
        text-sm
        font-medium
        hover:bg-gray-50
      "
    >
      Send Quote
    </button>

    <button
      className="
        h-10
        px-4
        rounded-xl
        bg-[#07122B]
        text-white
        text-sm
        font-medium
        hover:opacity-95
      "
    >
      Confirm Order
    </button>
  </div>
</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}