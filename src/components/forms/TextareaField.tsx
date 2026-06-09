type TextareaFieldProps = {
  label: string;
  name?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  required?: boolean;
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
        className="w-full h-32 rounded-xl border border-gray-200 p-4 text-sm outline-none resize-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
      />
    </div>
  );
}
