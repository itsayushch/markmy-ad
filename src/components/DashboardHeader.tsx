import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, Bell, ChevronDown, Menu } from "lucide-react";

interface DashboardHeaderProps {
  onMenuClick?: () => void;
}

export function DashboardHeader({ onMenuClick }: DashboardHeaderProps) {
  return (
    <div className="bg-[#160E77] px-4 sm:px-6 py-3">
      <div className="flex items-center justify-between">
        {/* Search */}
        <div className="flex items-center gap-3">
          <button
            className="lg:hidden inline-flex h-8 w-8 items-center justify-center rounded-full text-white/90 hover:text-white"
            onClick={onMenuClick}
            aria-label="Open menu"
          >
            <Menu size={18} />
          </button>
          <div className="relative w-40 sm:w-56 lg:w-64">
          <Search size={16} className="absolute left-0 top-1/2 -translate-y-1/2 text-white/60" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-transparent pl-6 pr-2 py-1 text-sm text-white placeholder:text-white/60 focus:outline-none"
          />
          </div>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Notification bell */}
          <button className="relative p-2 text-white/90 hover:text-white">
            <Bell size={18} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-orange-500 rounded-full"></span>
          </button>

          {/* User profile */}
          <div className="flex items-center gap-2 text-white">
            <Avatar className="w-7 h-7">
              <AvatarImage src="https://i.pravatar.cc/150?img=12" />
              <AvatarFallback>MB</AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium">Maxbert</span>
            <ChevronDown size={14} className="text-white/70" />
          </div>
        </div>
      </div>
    </div>
  );
}
