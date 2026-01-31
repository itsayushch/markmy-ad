"use client";

import { Sidebar } from "@/components/Sidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { DashboardStats } from "@/components/DashboardStats";
import { WorkloadStatus } from "@/components/WorkloadStatus";
import { TimelineProject } from "@/components/TimelineProject";
import { TimeTracker } from "@/components/TimeTracker";
import { TaskList } from "@/components/TaskList";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import { Share2, UserPlus } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-200 ${
          mobileSidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          className="absolute inset-0 bg-black/40"
          onClick={() => setMobileSidebarOpen(false)}
          aria-label="Close menu"
        />
        <div
          className={`relative h-full w-64 transform transition-transform duration-200 ${
            mobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <Sidebar showOnMobile className="h-full" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden min-h-0">
        {/* Header */}
        <DashboardHeader onMenuClick={() => setMobileSidebarOpen(true)} />

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto min-h-0">
          <div className="p-4 sm:p-6 space-y-6">
            {/* Page Title */}
            <Card className="rounded-xs border border-gray-200 shadow-sm">
              <CardHeader className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="space-y-1">
                  <CardTitle className="text-base">Dashboard</CardTitle>
                  <CardDescription>
                    Tracking ongoing activities and evaluating performance trends
                  </CardDescription>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  {/* Share task button */}
                  <Button variant="outline" className="gap-2 rounded-full">
                    <Share2 size={16} />
                    Share task
                  </Button>

                  {/* Add team button */}
                  <Button className="bg-orange-500 hover:bg-orange-600 gap-2 rounded-full">
                    <UserPlus size={16} />
                    Add team
                  </Button>
                </div>
              </CardHeader>
            </Card>



            {/* Main Content Grid */}
            <div className="space-y-6">
              {/* Top Row */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
                <Card className="rounded-xs h-full">
                  <CardContent className="p-4 space-y-4 h-full">
                    <DashboardStats />
                    <TimelineProject />
                  </CardContent>
                </Card>

                <div className="flex flex-col justify-between h-full">
                  <WorkloadStatus />
                  <TimeTracker />
                </div>
              </div>

              {/* Bottom Row */}
              <div>
                <TaskList />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
