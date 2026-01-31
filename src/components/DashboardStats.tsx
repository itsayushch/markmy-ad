import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MoreVertical, TrendingUp, CheckCircle2, Clock, FileText } from "lucide-react";

interface StatCardProps {
  title: string;
  value: number;
  subtitle: string;
  percentage: number;
  icon: React.ReactNode;
  bgColor: string;
}

function StatCard({ title, value, subtitle, percentage, icon, bgColor }: StatCardProps) {
  return (
    <Card className={`relative border-0 shadow-sm ${bgColor} gap-0 py-0 rounded-md`}>
      <CardHeader className="flex flex-row items-center justify-between px-4 pt-3 pb-1">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-white border border-gray-200 flex items-center justify-center">
            {icon}
          </div>
          <CardTitle className="text-sm font-semibold text-gray-900">{title}</CardTitle>
        </div>
        <button className="text-gray-500 hover:text-gray-700">
          <MoreVertical size={18} />
        </button>
      </CardHeader>
      <CardContent className="px-4 pt-2 pb-3 space-y-0.5">
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-medium text-[#020204] leading-tight">{value}</span>
          <span className="inline-flex items-center gap-1 rounded-md border border-orange-200 bg-orange-50 px-2 py-0.5 text-[11px] font-medium text-orange-500">
            <TrendingUp size={12} className="text-orange-500" />
            {Math.abs(percentage)}%
          </span>
        </div>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </CardContent>
    </Card>
  );
}

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <StatCard
        title="Total tasks"
        value={86}
        subtitle="Tasks finished last month"
        percentage={20}
        icon={<FileText size={18} className="text-gray-600" />}
        bgColor="bg-[#FDF0E8]"
      />
      <StatCard
        title="Overdue Tasks"
        value={25}
        subtitle="Tasks finished last month"
        percentage={20}
        icon={<Clock size={18} className="text-gray-600" />}
        bgColor="bg-[#F3F7EE]"
      />
      <StatCard
        title="Open Tasks"
        value={40}
        subtitle="Tasks finished last month"
        percentage={20}
        icon={<FileText size={18} className="text-gray-600" />}
        bgColor="bg-[#F3F4FB]"
      />
      <StatCard
        title="Completed Tasks"
        value={22}
        subtitle="Tasks finished last month"
        percentage={20}
        icon={<CheckCircle2 size={18} className="text-gray-600" />}
        bgColor="bg-[#FFF5EF]"
      />
    </div>
  );
}
