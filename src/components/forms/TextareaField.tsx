import FormError from "./FormError";

type TextareaFieldProps = {
  label: string;
  name?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  required?: boolean;
  error?: string;
};

export default function TextareaField({
  label,
  name,
  placeholder,
  value,
  defaultValue,
  onChange,
  disabled = false,
  required = false,
  error,
}: TextareaFieldProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>

      <textarea
        name={name}
        value={value}
        defaultValue={defaultValue}
        disabled={disabled}
        required={required}
        placeholder={placeholder}
        onChange={(e) => onChange?.(e.target.value)}
         className={`w-full h-32 rounded-xl border p-4 text-sm outline-none resize-none focus:ring-2 disabled:bg-gray-100 disabled:cursor-not-allowed ${
          error
            ? "border-red-500 focus:ring-red-500"
            : "border-gray-200 focus:ring-blue-500"
        }`}
      />
      <FormError error={error} />
    </div>
  );
}
