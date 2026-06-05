type InputFieldProps = {
  label: string;
  placeholder?: string;
  type?: string;
  defaultValue?: string;
};

export default function InputField({
  label,
  placeholder,
  type = "text",
  defaultValue,
}: InputFieldProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className="
          w-full
          h-12
          rounded-xl
          border
          border-gray-200
          px-4
          text-sm
          outline-none
          focus:ring-2
          focus:ring-blue-500
        "
      />
    </div>
  );
}