"use client";

import { useState, useEffect } from "react";
import CategoriesFilters from "@/components/dashboard/categories/CategoriesFilters";
import CategoriesTable from "@/components/dashboard/categories/CategoriesTable";
import PageHeader from "@/components/shared/PageHeader";
import Pagination from "@/components/shared/Pagination";
import { categories } from "@/constants/categories";

export default function CategoriesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredCategories = categories.filter((category) => {
    const matchesSearch =
      category.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      category.slug
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    const matchesStatus =
      selectedStatus === "all" ||
      category.status === selectedStatus;

    return matchesSearch && matchesStatus;
  });

  const hasActiveFilters =
    searchTerm !== "" ||
    selectedStatus !== "all";

  const ITEMS_PER_PAGE = 2;

  const totalPages = Math.ceil(
    filteredCategories.length / ITEMS_PER_PAGE
  );

  const startIndex =
    (currentPage - 1) * ITEMS_PER_PAGE;

  const endIndex =
    startIndex + ITEMS_PER_PAGE;

  const paginatedCategories =
    filteredCategories.slice(
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
    <div className="space-y-6">
      <PageHeader
        title="Categories"
        subtitle="Manage product categories and manufacturing groups."
      />

      <p className="text-sm text-gray-500">
        Showing {filteredCategories.length} categories
      </p>

      <CategoriesFilters
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        selectedStatus={selectedStatus}
        onStatusChange={setSelectedStatus}
        hasActiveFilters={hasActiveFilters}
        onClearFilters={handleClearFilters}
      />

      <CategoriesTable
        categories={paginatedCategories}
      />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}