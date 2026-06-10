type FormAlertProps = {
  show: boolean;
};

export default function FormAlert({
  show,
}: FormAlertProps) {
  if (!show) {
    return null;
  }

  return (
    <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4">
      <h3 className="font-semibold text-red-700">
        Validation Failed
      </h3>

      <p className="mt-1 text-sm text-red-600">
        Please fix the highlighted fields and try again.
      </p>
    </div>
  );
}