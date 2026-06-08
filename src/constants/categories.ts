import { CategoryStatus } from "@/types/status";

export type Category = {
  id: number;

  name: string;

  slug: string;

  description: string;

  seoTitle: string;

  seoDescription: string;

  seoKeywords: string[];

  status: CategoryStatus;

  createdAt: string;

  updatedAt: string;
};

export const categories: Category[] = [
  {
    id: 1,

    name: "Labels",

    slug: "labels",

    description:
      "Custom garment and branding labels for manufacturing.",

    seoTitle:
      "Custom Labels Manufacturing Services",

    seoDescription:
      "Premium custom garment labels and branding labels for fashion and retail businesses.",

    seoKeywords: [
      "custom labels",
      "garment labels",
      "branding labels",
    ],

    status: "active",

    createdAt: "2026-05-10",

    updatedAt: "2026-05-12",
  },

  {
    id: 2,

    name: "Packaging",

    slug: "packaging",

    description:
      "Custom printed packaging solutions for retail and shipping.",

    seoTitle:
      "Custom Packaging Solutions for Businesses",

    seoDescription:
      "Durable and premium custom packaging solutions for retail, ecommerce, and shipping industries.",

    seoKeywords: [
      "custom packaging",
      "printed boxes",
      "retail packaging",
    ],

    status: "active",

    createdAt: "2026-05-12",

    updatedAt: "2026-05-14",
  },

  {
    id: 3,

    name: "Stickers",

    slug: "stickers",

    description:
      "Premium waterproof stickers for branding and promotions.",

    seoTitle:
      "Custom Waterproof Branding Stickers",

    seoDescription:
      "High-quality waterproof stickers for branding, promotions, and product packaging.",

    seoKeywords: [
      "custom stickers",
      "branding stickers",
      "waterproof stickers",
    ],

    status: "active",

    createdAt: "2026-05-15",

    updatedAt: "2026-05-18",
  },

  {
    id: 4,

    name: "Tags",

    slug: "tags",

    description:
      "Luxury hang tags and retail tags for apparel products.",

    seoTitle:
      "Luxury Hang Tags for Apparel Brands",

    seoDescription:
      "Premium luxury hang tags and retail tags for fashion and apparel businesses.",

    seoKeywords: [
      "hang tags",
      "retail tags",
      "luxury apparel tags",
    ],

    status: "inactive",

    createdAt: "2026-05-18",

    updatedAt: "2026-05-20",
  },
];

export const categoryStatuses = [
  {
    value: "all",
    label: "All Status",
  },
  {
    value: "active",
    label: "Active",
  },
  {
    value: "inactive",
    label: "Inactive",
  },
];