import FormError from "./FormError";
type SelectFieldProps = {
  label: string;
  name?: string;
  options: string[];
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  required?: boolean;
  error?: string;
};

export default function SelectField({
  label,
  name,
  options,
  value,
  onChange,
  disabled = false,
  required = false,
  error,
}: SelectFieldProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>

      <select
        name={name}
        value={value}
        disabled={disabled}
        required={required}
        onChange={(e) => onChange?.(e.target.value)}
        className={`w-full h-12 rounded-xl border px-4 text-sm outline-none focus:ring-2 bg-white disabled:bg-gray-100 disabled:cursor-not-allowed ${
        error
          ? "border-red-500 focus:ring-red-500"
          : "border-gray-200 focus:ring-blue-500"
        }`}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <FormError error={error} />
    </div>
  );
}
