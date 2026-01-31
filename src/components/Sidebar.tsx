"use client";

import { 
  Home, 
  CheckSquare, 
  Calendar, 
  FileText, 
  Briefcase, 
  Users, 
  HelpCircle, 
  Settings, 
  ChevronDown,
  Plus
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  className?: string;
  showOnMobile?: boolean;
}

export function Sidebar({ className, showOnMobile = false }: SidebarProps) {
  const [taskDashboardOpen, setTaskDashboardOpen] = useState(true);
  const [campaignOpen, setCampaignOpen] = useState(true);
  const [teamOpen, setTeamOpen] = useState(true);
  const [campaignItems, setCampaignItems] = useState([
    { name: "Campaign 1 - xyz", color: "bg-purple-500" },
    { name: "Campaign 2 - xyz", color: "bg-blue-500" },
    { name: "Campaign 3 - xyz", color: "bg-orange-500" },
  ]);
  const [teamItems, setTeamItems] = useState([
    { name: "Campaign 1 Team", color: "bg-purple-500" },
  ]);

  const addCampaign = () => {
    setCampaignItems((prev) => [
      ...prev,
      { name: `Campaign ${prev.length + 1} - xyz`, color: "bg-purple-500" },
    ]);
  };

  const addTeam = () => {
    setTeamItems((prev) => [
      ...prev,
      { name: `Campaign ${prev.length + 1} Team`, color: "bg-purple-500" },
    ]);
  };

  return (
    <div
      className={cn(
        "w-62.5 bg-[#160E77] text-white h-full flex-col flex-shrink-0",
        showOnMobile ? "flex lg:hidden" : "hidden lg:flex",
        className
      )}
    >
      {/* Logo */}
      <div className="px-5 py-4">
        <img
          src="/image.png"
          alt="Mark My Ad"
          className="h-8 w-auto"
        />
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto py-3 scrollbar-hide">
        {/* Task Dashboard Section */}
        <div className="mb-2">
          <button
            onClick={() => setTaskDashboardOpen(!taskDashboardOpen)}
            className="mx-3 w-[calc(100%-24px)] px-4 py-3 flex items-center justify-between hover:bg-[#5542F61A]/90 transition-colors rounded-sm"
          >
            <div className="flex items-center gap-3 min-w-0">
              <Home size={20} className="flex-shrink-0" />
              <span className="text-[15px] whitespace-nowrap">Task Dashboard</span>
            </div>
            <ChevronDown 
              size={18} 
              className={cn(
                "transition-transform flex-shrink-0",
                taskDashboardOpen && "rotate-180"
              )}
            />
          </button>
          {/* background: ; */}
          {taskDashboardOpen && (
            <div className="mt-1 space-y-1 ">
              <a href="#" className="mx-3 w-[calc(100%-24px)] flex items-center gap-3 pl-9 pr-4 py-2.5 text-[14px] hover:bg-[#5542F61A]/90 transition-colors rounded-md">
                <CheckSquare size={18} className="flex-shrink-0" />
                <span>My Tasks</span>
              </a>
              <a href="#" className="mx-3 w-[calc(100%-24px)] flex items-center gap-3 pl-9 pr-4 py-2.5 text-[14px] hover:bg-[#5542F61A]/90 transition-colors rounded-md">
                <Calendar size={18} className="flex-shrink-0" />
                <span>Task Calendar</span>
              </a>
              <a href="#" className="mx-3 w-[calc(100%-24px)] flex items-center gap-3 pl-9 pr-4 py-2.5 text-[14px] hover:bg-[#5542F61A]/90 transition-colors rounded-md">
                <FileText size={18} className="flex-shrink-0" />
                <span>Task Reports</span>
              </a>
              <a href="#" className="mx-3 w-[calc(100%-24px)] flex items-center gap-3 pl-9 pr-4 py-2.5 text-[14px] hover:bg-[#5542F61A]/90 transition-colors rounded-md">
                <Briefcase size={18} className="flex-shrink-0" />
                <span>Task Portfolio</span>
              </a>
            </div>
          )}
        </div>

        {/* Campaign Section */}
        <div className="mb-2 mt-4">
          <div className="px-5 py-2 flex items-center justify-between text-xs text-white/60 uppercase font-medium tracking-wide">
            <span>Campaign</span>
            <button className="hover:text-white transition-colors" onClick={addCampaign}>
              <Plus size={16} />
            </button>
          </div>
          <div className="space-y-1 mt-1">
            <button
              onClick={() => setCampaignOpen(!campaignOpen)}
              className="mx-3 w-[calc(100%-24px)] px-4 py-2.5 flex items-center justify-between hover:bg-[#5542F61A]/90 transition-colors rounded-md"
            >
              <div className="flex items-center gap-3 min-w-0">
                <Briefcase size={18} className="flex-shrink-0" />
                <span className="text-[14px] truncate">Campaign - xyz</span>
              </div>
              <ChevronDown 
                size={18} 
                className={cn(
                  "transition-transform flex-shrink-0 ml-2",
                  campaignOpen && "rotate-180"
                )}
              />
            </button>
            {campaignOpen && (
              <>
                {campaignItems.map((item, index) => (
                  <a
                    key={`${item.name}-${index}`}
                    href="#"
                    className="mx-3 w-[calc(100%-24px)] flex items-center gap-3 px-4 py-2.5 text-[14px] hover:bg-[#5542F61A]/90 transition-colors rounded-md"
                  >
                    <div className={`w-2.5 h-2.5 rounded-full ${item.color} flex-shrink-0`}></div>
                    <span className="truncate">{item.name}</span>
                  </a>
                ))}
              </>
            )}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-2 mt-4">
          <div className="px-5 py-2 flex items-center justify-between text-xs text-white/60 uppercase font-medium tracking-wide">
            <span>Team</span>
            <button className="hover:text-white transition-colors" onClick={addTeam}>
              <Plus size={16} />
            </button>
          </div>
          <div className="space-y-1 mt-1">
            <button
              onClick={() => setTeamOpen(!teamOpen)}
              className="mx-3 w-[calc(100%-24px)] px-4 py-2.5 flex items-center justify-between hover:bg-[#5542F61A]/90 transition-colors rounded-md"
            >
              <div className="flex items-center gap-3 min-w-0">
                <Users size={18} className="flex-shrink-0" />
                <span className="text-[14px] truncate">All Team</span>
              </div>
              <ChevronDown 
                size={18} 
                className={cn(
                  "transition-transform flex-shrink-0 ml-2",
                  teamOpen && "rotate-180"
                )}
              />
            </button>
            {teamOpen && (
              <>
                {teamItems.map((item, index) => (
                  <a
                    key={`${item.name}-${index}`}
                    href="#"
                    className="mx-3 w-[calc(100%-24px)] flex items-center gap-3 px-4 py-2.5 text-[14px] hover:bg-[#5542F61A]/90 transition-colors rounded-md"
                  >
                    <div className={`w-2.5 h-2.5 rounded-full ${item.color} flex-shrink-0`}></div>
                    <span className="truncate">{item.name}</span>
                  </a>
                ))}
              </>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="border-t border-white/10 py-2 flex-shrink-0">
        <a href="#" className="mx-3 w-[calc(100%-24px)] flex items-center gap-3 px-4 py-3 text-[14px] hover:bg-[#5542F61A]/90 transition-colors rounded-md">
          <HelpCircle size={20} className="flex-shrink-0" />
          <span>Supports</span>
        </a>
        <a href="#" className="mx-3 w-[calc(100%-24px)] flex items-center gap-3 px-4 py-3 text-[14px] hover:bg-[#5542F61A]/90 transition-colors rounded-md">
          <Settings size={20} className="flex-shrink-0" />
          <span>Settings</span>
        </a>
      </div>
    </div>
  );
}
