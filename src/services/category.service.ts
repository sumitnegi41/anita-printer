import { prisma } from "@/lib/prisma";
import type { CategoryInput } from "@/schemas/category.schema";
import type { CategoryFilters } from "@/types/category";
export async function createCategory(
  data: CategoryInput
) {
  const slug = data.name
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-");

  const existingCategory =
    await prisma.category.findUnique({
      where: {
        slug,
      },
    });

  if (existingCategory) {
    throw new Error(
      "Category with this slug already exists"
    );
  }

  return prisma.category.create({
    data: {
      name: data.name,
      slug,
      description: data.description,
      seoTitle: data.seoTitle,
      seoDescription: data.seoDescription,
      seoKeywords: data.seoKeywords,
      status: data.status,
    },
  });
}


export async function getCategories({
  search = "",
  status = "all",
  page = 1,
}: CategoryFilters = {}) {
  const ITEMS_PER_PAGE = 10;

  const where = {
    ...(search && {
      OR: [
        {
          name: {
            contains: search,
            mode: "insensitive" as const,
          },
        },
        {
          slug: {
            contains: search,
            mode: "insensitive" as const,
          },
        },
      ],
    }),

    ...(status !== "all" && {
      status,
    }),
  };

  const [categories, totalCount] =
    await Promise.all([
      prisma.category.findMany({
        where,
        orderBy: {
          createdAt: "desc",
        },
        skip:
          (page - 1) *
          ITEMS_PER_PAGE,
        take: ITEMS_PER_PAGE,
      }),

      prisma.category.count({
        where,
      }),
    ]);

  return {
    categories,
    totalCount,
    totalPages: Math.ceil(
      totalCount /
        ITEMS_PER_PAGE
    ),
    currentPage: page,
  };
}



export async function getCategoryById(id: number) {
  return prisma.category.findUnique({
    where: {
      id,
    },
  });
}

export async function updateCategory(
  id: number,
  data: CategoryInput
) {
  const slug = data.name
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-");

  const existingCategory =
    await prisma.category.findFirst({
      where: {
        slug,
        NOT: {
          id,
        },
      },
    });

  if (existingCategory) {
    throw new Error(
      "Category with this slug already exists"
    );
  }

  return prisma.category.update({
    where: {
      id,
    },
    data: {
      name: data.name,
      slug,
      description: data.description,
      seoTitle: data.seoTitle,
      seoDescription: data.seoDescription,
      seoKeywords: data.seoKeywords,
      status: data.status,
    },
  });
}

export async function deleteCategory(
  id: number
) {
  return prisma.category.delete({
    where: {
      id,
    },
  });
}