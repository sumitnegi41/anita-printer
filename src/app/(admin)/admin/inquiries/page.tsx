"use client";

import { useState, useEffect } from "react";
import PageHeader from "@/components/shared/PageHeader";
import InquiryFilters from "@/components/dashboard/inquiries/InquiryFilters";
import InquiryTable from "@/components/dashboard/inquiries/InquiryTable";
import Pagination from "@/components/shared/Pagination";
import { inquiries } from "@/constants/inquiries";

export default function InquiriesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] =
    useState("all");
  const [currentPage, setCurrentPage] =
    useState(1);

  const filteredInquiries = inquiries.filter(
    (inquiry) => {
      const matchesSearch =
        inquiry.company
          .toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          ) ||
        inquiry.product
          .toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          );

      const matchesStatus =
        selectedStatus === "all" ||
        inquiry.status.toLowerCase() ===
          selectedStatus;

      return (
        matchesSearch && matchesStatus
      );
    }
  );

  const hasActiveFilters =
    searchTerm !== "" ||
    selectedStatus !== "all";

  const ITEMS_PER_PAGE = 2;

  const totalPages = Math.ceil(
    filteredInquiries.length /
      ITEMS_PER_PAGE
  );

  const startIndex =
    (currentPage - 1) *
    ITEMS_PER_PAGE;

  const endIndex =
    startIndex + ITEMS_PER_PAGE;

  const paginatedInquiries =
    filteredInquiries.slice(
      startIndex,
      endIndex
    );

  const handleClearFilters = () => {
    setSearchTerm("");
    setSelectedStatus("all");
    setCurrentPage(1);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedStatus]);

  return (
    <div>
      <PageHeader
        title="Inquiries"
        subtitle="Manage customer inquiries and quotation requests."
      />

      <p className="mt-2 text-sm text-gray-500">
        Showing {
          filteredInquiries.length
        } inquiries
      </p>

      <InquiryFilters
        searchTerm={searchTerm}
        onSearchChange={
          setSearchTerm
        }
        selectedStatus={
          selectedStatus
        }
        onStatusChange={
          setSelectedStatus
        }
        hasActiveFilters={
          hasActiveFilters
        }
        onClearFilters={
          handleClearFilters
        }
      />

      <InquiryTable
        inquiries={
          paginatedInquiries
        }
      />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={
          setCurrentPage
        }
      />
    </div>
  );
}
