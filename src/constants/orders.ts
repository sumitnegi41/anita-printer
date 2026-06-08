import { Order } from "@/types/order";

export const orders: Order[] = [
  {
    id: "1",

    orderNumber: "ORD-2026-001",

    customerName: "Apex Industries",

    customerPhone: "+91 9876543210",

    customerEmail: "operations@apex.com",

    productName: "Custom Packaging Boxes",

    quantity: 5000,

    finalPrice: 85000,

    status: "in_production",

    priority: "high",

    assignedTo: "Rahul Sharma",

    expectedDeliveryDate: "2026-05-28",

    productionNotes:
      "Use premium corrugated material with matte finish.",

    createdAt: "2026-05-20",

    updatedAt: "2026-05-22",
  },

  {
    id: "2",

    orderNumber: "ORD-2026-002",

    customerName: "Urban Style Clothing",

    customerPhone: "+91 9811122233",

    customerEmail: "info@urbanstyle.com",

    productName: "Woven Labels",

    quantity: 12000,

    finalPrice: 42000,

    status: "printing",

    priority: "medium",

    assignedTo: "Priya Verma",

    expectedDeliveryDate: "2026-05-30",

    productionNotes:
      "Ensure brand colors match approved sample.",

    createdAt: "2026-05-18",

    updatedAt: "2026-05-21",
  },

  {
    id: "3",

    orderNumber: "ORD-2026-003",

    customerName: "FreshMart Pvt Ltd",

    customerPhone: "+91 9898989898",

    customerEmail: "procurement@freshmart.com",

    productName: "Printed Stickers",

    quantity: 8000,

    finalPrice: 36000,

    status: "quality_check",

    priority: "high",

    assignedTo: "Amit Singh",

    expectedDeliveryDate: "2026-05-25",

    productionNotes:
      "Check waterproof coating before dispatch.",

    createdAt: "2026-05-16",

    updatedAt: "2026-05-22",
  },

  {
    id: "4",

    orderNumber: "ORD-2026-004",

    customerName: "Luxury Trends",

    customerPhone: "+91 9777788888",

    customerEmail: "support@luxurytrends.com",

    productName: "Hang Tags",

    quantity: 3000,

    finalPrice: 25000,

    status: "approved",

    priority: "low",

    assignedTo: "Neha Kapoor",

    expectedDeliveryDate: "2026-06-02",

    productionNotes:
      "Gold foil finish required for premium branding.",

    createdAt: "2026-05-19",

    updatedAt: "2026-05-20",
  },
];

export const orderStatuses = [
  {
    value: "all",
    label: "All Status",
  },
  {
    value: "approved",
    label: "Approved",
  },
  {
    value: "in_production",
    label: "In Production",
  },
  {
    value: "printing",
    label: "Printing",
  },
  {
    value: "quality_check",
    label: "Quality Check",
  },
  {
    value: "completed",
    label: "Completed",
  },
];