type FormSectionProps = {
  title: string;
  children: React.ReactNode;
};

export default function FormSection({
  title,
  children,
}: FormSectionProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">
        {title}
      </h2>

      <div className="space-y-6">
        {children}
      </div>
    </div>
  );
}