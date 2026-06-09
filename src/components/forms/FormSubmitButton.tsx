"use client";

import { useFormStatus } from "react-dom";

type FormSubmitButtonProps = {
  idleText: string;
  loadingText: string;
  className?: string;
};

export default function FormSubmitButton({
  idleText,
  loadingText,
  className = "",
}: FormSubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={`h-11 px-6 rounded-xl bg-[#07122B] text-white text-sm font-medium cursor-pointer hover:opacity-95 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {pending
        ? loadingText
        : idleText}
    </button>
  );
}
