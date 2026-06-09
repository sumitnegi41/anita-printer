export type Category = {
  id: number;

  name: string;

  slug: string;

  description: string | null;

  seoTitle: string | null;

  seoDescription: string | null;

  seoKeywords: string[];

  status: string;

  createdAt: Date;

  updatedAt: Date;
};

export type CategoryFilters = {
  search?: string;
  status?: string;
  page?: number;
};