"use client";

import { useEffect, useState, useActionState } from "react";

import { createCategoryAction, updateCategoryAction, } from "@/actions/category.actions";

import type { Category } from "@/types/category";
import type { ActionState } from "@/types/action-state";

import FormSection from "@/components/forms/FormSection";
import InputField from "@/components/forms/InputField";
import SelectField from "@/components/forms/SelectField";
import TextareaField from "@/components/forms/TextareaField";
import FormSubmitButton from "@/components/forms/FormSubmitButton";
import FormAlert from "@/components/forms/FormAlert";

type CategoryFormProps = {
  mode: "create" | "edit";
  category?: Category;
};

export default function CategoryForm({
  mode,
  category,
}: CategoryFormProps) {
  const [name, setName] = useState(
    category?.name ?? ""
  );

  const [slug, setSlug] = useState(
    category?.slug ?? ""
  );

  const [status, setStatus] = useState(
    category?.status ?? "active"
  );

  const [description, setDescription] =
    useState(
      category?.description ?? ""
    );

  const [seoTitle, setSeoTitle] =
    useState(
      category?.seoTitle ?? ""
    );

  const [seoDescription, setSeoDescription] =
    useState(
      category?.seoDescription ?? ""
    );

  const [seoKeywords, setSeoKeywords] =
    useState(
      category?.seoKeywords.join(", ") ??
        ""
    );

  useEffect(() => {
    const generatedSlug = name
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-");

    setSlug(generatedSlug);
  }, [name]);

  const action =
    mode === "create"
      ? createCategoryAction
      : updateCategoryAction.bind(
          null,
          category!.id
        );

    const initialState: ActionState = { success: true, };
    const [state, formAction] =
    useActionState( action as any, initialState );
  return (
    <form action={formAction}>
     <FormAlert
      show={Boolean(state.errors)}
    />
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            {mode === "create"
              ? "Create Category"
              : "Edit Category"}
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            {mode === "create"
              ? "Create and manage product categories."
              : "Update category details and SEO information."}
          </p>
        </div>

        <FormSubmitButton
          idleText={
            mode === "create"
              ? "Save Category"
              : "Update Category"
          }
          loadingText={
            mode === "create"
              ? "Saving Category..."
              : "Updating Category..."
          }
        />
      </div>

      <div className="grid grid-cols-2 gap-8">
        <FormSection title="Basic Information">
          <InputField
            label="Category Name"
            name="name"
            value={name}
            onChange={setName}
             error={
                state.errors?.name?.[0]
              }
            placeholder="Enter category name"
          />

          <InputField
            label="Slug"
            value={slug}
            disabled
            placeholder="Auto generated slug"
          />

          <SelectField
            label="Status"
            name="status"
            value={status}
            onChange={setStatus}
            options={[
              "active",
              "inactive",
            ]}
          />

          <TextareaField
            label="Description"
            name="description"
            value={description}
            onChange={setDescription}
            error={state.errors?.description?.[0]}
            placeholder="Write category description..."
          />
        </FormSection>

        <FormSection title="SEO Information">
          <InputField
            label="SEO Title"
            name="seoTitle"
            value={seoTitle}
            onChange={setSeoTitle}
            error={state.errors?.seoTitle?.[0]}
            placeholder="Enter SEO title"
          />

          <TextareaField
            label="SEO Description"
            name="seoDescription"
            value={seoDescription}
            onChange={setSeoDescription}
            error={state.errors?.seoDescription?.[0]}
            placeholder="Enter SEO description..."
          />

          <InputField
            label="SEO Keywords"
            name="seoKeywords"
            value={seoKeywords}
            onChange={setSeoKeywords}
            error={state.errors?.seoKeywords?.[0]}
            placeholder="Enter keywords separated by commas"
          />
        </FormSection>
      </div>
    </form>
  );
}