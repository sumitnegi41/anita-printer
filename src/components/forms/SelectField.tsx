type SelectFieldProps = {
  label: string;
  options: string[];
};

export default function SelectField({
  label,
  options,
}: SelectFieldProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>

      <select
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
          bg-white
        "
      >
        {options.map((option) => (
          <option
            key={option}
            value={option}
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}