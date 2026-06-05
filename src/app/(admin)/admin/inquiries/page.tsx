import PageHeader from "@/components/shared/PageHeader";
import InquiryFilters from "@/components/dashboard/inquiries/InquiryFilters";
import InquiryTable from "@/components/dashboard/inquiries/InquiryTable";

export default function InquiriesPage() {
  return (
    <div>
      <PageHeader
        title="Inquiries"
        subtitle="Manage customer inquiries and quotation requests."
      />

      <InquiryFilters />

      <InquiryTable />
    </div>
  );
}