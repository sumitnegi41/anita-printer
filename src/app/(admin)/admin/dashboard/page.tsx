import StatCard from "@/components/shared/StatCard";
import PageHeader from "@/components/shared/PageHeader";

export default function DashboardPage() {
  return (
    <div>
      <div className="mb-8">
       <PageHeader
          title="Dashboard Overview"
          subtitle="Monitor inquiries, orders and production activities."
        />
      </div>

      <div className="grid grid-cols-4 gap-6">
        <StatCard
          title="Total Inquiries"
          value="1248"
        />

        <StatCard
          title="Pending Quotations"
          value="312"
        />

        <StatCard
          title="Confirmed Orders"
          value="152"
        />

        <StatCard
          title="Total Revenue"
          value="₹24.5L"
        />
      </div>

      <div className="grid grid-cols-3 gap-6 mt-8">
        <div className="col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold mb-6">
            Recent Inquiries
          </h2>

         <div className="space-y-4">
          <div className="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:bg-gray-50 transition">
            <div>
              <p className="font-semibold text-gray-800">
                H&M Fashion
              </p>

              <p className="text-sm text-gray-500 mt-1">
                Woven Label Inquiry
              </p>
            </div>

            <div className="text-right">
              <p className="text-sm font-medium text-green-600">
                New
              </p>

              <p className="text-xs text-gray-400 mt-1">
                2 hours ago
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:bg-gray-50 transition">
            <div>
              <p className="font-semibold text-gray-800">
                Zara Clothing
              </p>

              <p className="text-sm text-gray-500 mt-1">
                Heat Transfer Labels
              </p>
            </div>

            <div className="text-right">
              <p className="text-sm font-medium text-yellow-600">
                Pending
              </p>

              <p className="text-xs text-gray-400 mt-1">
                5 hours ago
              </p>
            </div>
          </div>
        </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold mb-6">
            Recent Activities
          </h2>

          <div className="space-y-5">
  <div className="flex items-start gap-3">
    <div className="w-3 h-3 rounded-full bg-green-500 mt-2"></div>

    <div>
      <p className="text-sm font-medium text-gray-800">
        Product added successfully
      </p>

      <p className="text-xs text-gray-400 mt-1">
        10 minutes ago
      </p>
    </div>
  </div>

  <div className="flex items-start gap-3">
    <div className="w-3 h-3 rounded-full bg-yellow-500 mt-2"></div>

    <div>
      <p className="text-sm font-medium text-gray-800">
        New inquiry received
      </p>

      <p className="text-xs text-gray-400 mt-1">
        45 minutes ago
      </p>
    </div>
  </div>

  <div className="flex items-start gap-3">
    <div className="w-3 h-3 rounded-full bg-blue-500 mt-2"></div>

    <div>
      <p className="text-sm font-medium text-gray-800">
        Order moved to production
      </p>

      <p className="text-xs text-gray-400 mt-1">
        2 hours ago
      </p>
    </div>
  </div>
</div>
        </div>
      </div>
    </div>
  );
}