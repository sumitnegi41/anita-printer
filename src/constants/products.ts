import { ProductStatus } from "@/types/status";

export type Product = {
  id: number;

  name: string;

  slug: string;

  category: string;

  status: ProductStatus;

  minimumOrderQty: number;

  availableMaterials: string[];

  availableFinishes: string[];

  availableSizes: string[];

  seoTitle: string;

  seoDescription: string;

  seoKeywords: string[];

  featuredImage: string;

  galleryImages: string[];

  createdAt: string;

  updatedAt: string;
};

export const products: Product[] = [
  {
    id: 1,

    name: "Woven Labels",

    slug: "woven-labels",

    category: "Labels",

    status: "active",

    minimumOrderQty: 1000,

    availableMaterials: [
      "Cotton",
      "Polyester",
      "Satin",
    ],

    availableFinishes: [
      "Matte",
      "Glossy",
    ],

    availableSizes: [
      "Small",
      "Medium",
      "Large",
    ],

    seoTitle: "Custom Woven Labels",

    seoDescription:
      "Premium woven labels for garments and fashion brands.",

    seoKeywords: [
      "woven labels",
      "garment labels",
      "custom labels",
    ],

    featuredImage:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518",

    galleryImages: [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518",

      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb",
    ],

    createdAt: "2025-05-20",

    updatedAt: "2025-05-21",
  },

  {
    id: 2,

    name: "Custom Packaging Boxes",

    slug: "custom-packaging-boxes",

    category: "Packaging",

    status: "active",

    minimumOrderQty: 500,

    availableMaterials: [
      "Kraft Paper",
      "Corrugated Board",
    ],

    availableFinishes: [
      "UV Coating",
      "Embossing",
    ],

    availableSizes: [
      "Small",
      "Medium",
      "Large",
    ],

    seoTitle: "Custom Packaging Boxes",

    seoDescription:
      "Durable custom packaging boxes for premium branding.",

    seoKeywords: [
      "packaging boxes",
      "custom packaging",
      "printed boxes",
    ],

    featuredImage:
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da",

    galleryImages: [
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da",

      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad",
    ],

    createdAt: "2025-05-10",

    updatedAt: "2025-05-18",
  },

  {
    id: 3,

    name: "Printed Stickers",

    slug: "printed-stickers",

    category: "Stickers",

    status: "draft",

    minimumOrderQty: 2000,

    availableMaterials: [
      "Vinyl",
      "Transparent Film",
    ],

    availableFinishes: [
      "Glossy",
      "Matte",
    ],

    availableSizes: [
      "Round",
      "Square",
      "Custom",
    ],

    seoTitle: "Custom Printed Stickers",

    seoDescription:
      "High-quality waterproof printed stickers for branding.",

    seoKeywords: [
      "printed stickers",
      "custom stickers",
      "branding stickers",
    ],

    featuredImage:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d",

    galleryImages: [
      "https://images.unsplash.com/photo-1626785774573-4b799315345d",

      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
    ],

    createdAt: "2025-05-01",

    updatedAt: "2025-05-11",
  },

  {
    id: 4,

    name: "Hang Tags",

    slug: "hang-tags",

    category: "Tags",

    status: "archived",

    minimumOrderQty: 1500,

    availableMaterials: [
      "Art Paper",
      "Recycled Paper",
    ],

    availableFinishes: [
      "Foil Printing",
      "Embossing",
    ],

    availableSizes: [
      "Standard",
      "Premium",
    ],

    seoTitle: "Luxury Hang Tags",

    seoDescription:
      "Premium luxury hang tags for apparel and retail products.",

    seoKeywords: [
      "hang tags",
      "retail tags",
      "luxury tags",
    ],

    featuredImage:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8",

    galleryImages: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8",

      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b",
    ],

    createdAt: "2025-04-15",

    updatedAt: "2025-05-02",
  },
];