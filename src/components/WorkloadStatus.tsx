import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MoreVertical, BarChart3 } from "lucide-react";

export function WorkloadStatus() {
  const bars = Array.from({ length: 24 }, (_, i) => i);

  return (
    <Card className="border-0 shadow-sm rounded-xs">
      <CardHeader className="flex flex-row items-center justify-between pb-3">
        <div className="flex items-center gap-2">
          <BarChart3 size={18} className="text-gray-600" />
          <CardTitle className="text-sm font-medium text-gray-900">Workload by status</CardTitle>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <MoreVertical size={18} />
        </button>
      </CardHeader>
      <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Work in Progress */}
        <div className="rounded-lg border border-gray-200 p-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-900">Work in Progress</span>
          </div>
          <div className="mt-2 flex items-center justify-between text-xs">
            <span className="font-medium text-gray-700">44%</span>
            <span className="text-[10px] text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">28 Days</span>
          </div>
          <div className="mt-2 flex items-end gap-1 h-6 w-full">
            {bars.map((i) => (
              <div
                key={i}
                className={`flex-1 rounded-sm ${i < 10 ? "bg-orange-500" : "bg-gray-200"}`}
                style={{ height: 25 }}
              />
            ))}
          </div>
        </div>

        {/* Completed */}
        <div className="rounded-lg border border-gray-200 p-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-900">Completed</span>
          </div>
          <div className="mt-2 flex items-center justify-between text-xs">
            <span className="font-medium text-gray-700">46%</span>
            <span className="text-[10px] text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">28 Days</span>
          </div>
          <div className="mt-2 flex items-end gap-1 h-6 w-full">
            {bars.map((i) => (
              <div
                key={i}
                className={`flex-1 rounded-sm ${i < 11 ? "bg-cyan-400" : "bg-gray-200"}`}
                style={{ height: 25 }}
              />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
