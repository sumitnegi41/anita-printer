"use client";

import { useEffect, useState } from "react";

import { createCategoryAction } from "@/actions/category.actions";

import FormSection from "@/components/forms/FormSection";
import InputField from "@/components/forms/InputField";
import SelectField from "@/components/forms/SelectField";
import TextareaField from "@/components/forms/TextareaField";
import FormSubmitButton from "@/components/forms/FormSubmitButton";

export default function CreateCategoryForm() {
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [status, setStatus] =
    useState("active");

  const [description, setDescription] =
    useState("");

  const [seoTitle, setSeoTitle] =
    useState("");

  const [seoDescription, setSeoDescription] =
    useState("");

  const [seoKeywords, setSeoKeywords] =
    useState("");

  useEffect(() => {
    const generatedSlug = name
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-");

    setSlug(generatedSlug);
  }, [name]);

  return (
    <form action={createCategoryAction}>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Create Category
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Create and manage product categories.
          </p>
        </div>

        <FormSubmitButton
          idleText="Save Category"
          loadingText="Saving Category..."
        />
      </div>

      <div className="grid grid-cols-2 gap-8">
        <FormSection title="Basic Information">
          <InputField
            label="Category Name"
            name="name"
            value={name}
            onChange={setName}
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
            placeholder="Write category description..."
          />
        </FormSection>

        <FormSection title="SEO Information">
          <InputField
            label="SEO Title"
            name="seoTitle"
            value={seoTitle}
            onChange={setSeoTitle}
            placeholder="Enter SEO title"
          />

          <TextareaField
            label="SEO Description"
            name="seoDescription"
            value={seoDescription}
            onChange={setSeoDescription}
            placeholder="Enter SEO description..."
          />

          <InputField
            label="SEO Keywords"
            name="seoKeywords"
            value={seoKeywords}
            onChange={setSeoKeywords}
            placeholder="Enter keywords separated by commas"
          />
        </FormSection>
      </div>
    </form>
  );
}