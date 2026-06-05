export default function Header() {
  return (
    <header className="h-20 sticky top-0 z-10 bg-white border-b border-gray-200 flex items-center justify-between px-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          Dashboard
        </h1>

        <p className="text-sm text-gray-500 mt-1">
          Welcome back, Admin
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-[#07122B] text-white flex items-center justify-center font-bold">
          A
        </div>
      </div>
    </header>
  );
}