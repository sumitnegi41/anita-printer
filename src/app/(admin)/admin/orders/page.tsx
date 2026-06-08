"use client";

import { useState, useEffect } from "react";
import OrdersFilters from "@/components/dashboard/orders/OrdersFilters";
import OrdersTable from "@/components/dashboard/orders/OrdersTable";
import PageHeader from "@/components/shared/PageHeader";
import Pagination from "@/components/shared/Pagination";
import { orders } from "@/constants/orders";

export default function OrdersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] =
    useState("all");
  const [currentPage, setCurrentPage] =
    useState(1);

  const filteredOrders = orders.filter(
    (order) => {
      const matchesSearch =
        order.orderNumber
          .toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          ) ||
        order.customerName
          .toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          ) ||
        order.productName
          .toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          );

      const matchesStatus =
        selectedStatus === "all" ||
        order.status === selectedStatus;

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
    filteredOrders.length /
      ITEMS_PER_PAGE
  );

  const startIndex =
    (currentPage - 1) *
    ITEMS_PER_PAGE;

  const endIndex =
    startIndex + ITEMS_PER_PAGE;

  const paginatedOrders =
    filteredOrders.slice(
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
        title="Orders"
        subtitle="Manage and track manufacturing orders."
      />

      <p className="text-sm text-gray-500">
        Showing {filteredOrders.length} orders
      </p>

      <OrdersFilters
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        selectedStatus={selectedStatus}
        onStatusChange={setSelectedStatus}
        hasActiveFilters={hasActiveFilters}
        onClearFilters={handleClearFilters}
      />

      <OrdersTable
        orders={paginatedOrders}
      />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}