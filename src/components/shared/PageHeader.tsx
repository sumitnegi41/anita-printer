type PageHeaderProps = {
  title: string;
  subtitle: string;
};

export default function PageHeader({
  title,
  subtitle,
}: PageHeaderProps) {
  return (
    <div className="mb-8">
      <h1 className="text-4xl font-bold text-gray-800">
        {title}
      </h1>

      <p className="text-gray-500 mt-2">
        {subtitle}
      </p>
    </div>
  );
}