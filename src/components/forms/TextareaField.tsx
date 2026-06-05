type TextareaFieldProps = {
  label: string;
  placeholder?: string;
  defaultValue?: string;
};
export default function TextareaField({
  label,
  placeholder,
  defaultValue,
}: TextareaFieldProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>

      <textarea
        placeholder={placeholder}
        defaultValue={defaultValue}
        className="
          w-full
          h-32
          rounded-xl
          border
          border-gray-200
          p-4
          text-sm
          outline-none
          resize-none
          focus:ring-2
          focus:ring-blue-500
        "
      />
    </div>
  );
}