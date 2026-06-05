"use client";

import { useState, useEffect } from "react";
import PageHeader from "@/components/shared/PageHeader";
import ProductFilters from "@/components/dashboard/products/ProductFilters";
import ProductTable from "@/components/dashboard/products/ProductTable";
import Pagination from "@/components/shared/Pagination";
import { products } from "@/constants/products";

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" ||
      product.category.toLowerCase() === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const hasActiveFilters =
    searchTerm !== "" || selectedCategory !== "all";

  const ITEMS_PER_PAGE = 2;

  const totalPages = Math.ceil(
    filteredProducts.length / ITEMS_PER_PAGE
  );

  const startIndex =
    (currentPage - 1) * ITEMS_PER_PAGE;

  const endIndex =
    startIndex + ITEMS_PER_PAGE;

  const paginatedProducts = filteredProducts.slice(
    startIndex,
    endIndex
  );

  const handleClearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("all");
    setCurrentPage(1);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory]);

  return (
    <div>
      <div className="mb-8">
        <PageHeader
          title="Products"
          subtitle="Manage manufacturing products and catalog."
        />
      </div>

      <p className="mt-2 text-sm text-gray-500">
        Showing {filteredProducts.length} products
      </p>

      <ProductFilters
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        hasActiveFilters={hasActiveFilters}
        onClearFilters={handleClearFilters}
      />

      <ProductTable products={paginatedProducts} />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}