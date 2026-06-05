type DetailItemProps = {
  label: string;
  children: React.ReactNode;
};

export default function DetailItem({
  label,
  children,
}: DetailItemProps) {
  return (
    <div>
      <p className="text-sm text-gray-500">
        {label}
      </p>

      <div className="mt-1 font-medium text-gray-800">
        {children}
      </div>
    </div>
  );
}