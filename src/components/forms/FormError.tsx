type FormErrorProps = {
  error?: string;
};

export default function FormError({
  error,
}: FormErrorProps) {
  if (!error) {
    return null;
  }

  return (
    <p className="mt-2 text-sm text-red-600">
      {error}
    </p>
  );
}