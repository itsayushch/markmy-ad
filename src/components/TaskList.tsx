'use client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Search, ChevronDown, Settings, MoreVertical, Calendar, ChevronsUpDown, Flag } from "lucide-react";
import { useMemo, useState } from "react";

interface Task {
  name: string;
  priority: "High" | "Medium" | "Low";
  startDate: string;
  assignedTo: string[];
  dueDate: string;
  status: string;
}

export function TaskList() {
  const tasks: Task[] = [
    {
      name: "Develop High-fidelities UI",
      priority: "High",
      startDate: "23/04/2025",
      assignedTo: ["User1", "User2", "User3"],
      dueDate: "30/05/2025",
      status: "In Review",
    },
    {
      name: "Notify - SaaS Real Estate...",
      priority: "Medium",
      startDate: "23/04/2025",
      assignedTo: ["User1", "User2", "User3"],
      dueDate: "23/05/2025",
      status: "In Review",
    },
  ];

  const [selected, setSelected] = useState<Set<number>>(new Set());

  const allSelected = useMemo(() => selected.size === tasks.length && tasks.length > 0, [selected, tasks.length]);

  const toggleAll = () => {
    setSelected((prev) => {
      if (prev.size === tasks.length) {
        return new Set();
      }
      return new Set(tasks.map((_, index) => index));
    });
  };

  const toggleRow = (index: number) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <Card className="rounded-xs">
      <CardHeader className="pb-3 pt-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <Calendar size={16} className="text-gray-600" />
            <CardTitle className="text-sm font-semibold">Task List</CardTitle>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {/* Search */}
            <div className="relative">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search Task..."
                className="pl-8 pr-4 h-8 text-xs border border-gray-200 rounded-full w-40 sm:w-44 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            {/* All Teams dropdown */}
            <button className="px-3 h-8 text-xs border border-gray-200 rounded-full hover:bg-gray-50 flex items-center gap-2">
              All Teams
              <ChevronDown size={12} />
            </button>
            
            {/* Settings */}
            <button className="h-8 w-8 flex items-center justify-center hover:bg-gray-100 rounded-full border border-gray-200">
              <Settings size={14} className="text-gray-600" />
            </button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[36px]">
                <input
                  type="checkbox"
                  className="h-3.5 w-3.5 rounded border-gray-300"
                  checked={allSelected}
                  onChange={toggleAll}
                />
              </TableHead>
              <TableHead className="w-[32%] text-xs font-medium text-gray-500">
                <div className="flex items-center gap-1">
                  Task Name
                  <ChevronsUpDown size={12} className="text-gray-400" />
                </div>
              </TableHead>
              <TableHead className="text-xs font-medium text-gray-500">Priority</TableHead>
              <TableHead className="text-xs font-medium text-gray-500">Started Date</TableHead>
              <TableHead className="text-xs font-medium text-gray-500">Assigned To</TableHead>
              <TableHead className="text-xs font-medium text-gray-500">Due Date</TableHead>
              <TableHead className="text-xs font-medium text-gray-500">Status</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tasks.map((task, index) => (
              <TableRow key={index} className="h-11">
                <TableCell>
                  <input
                    type="checkbox"
                    className="h-3.5 w-3.5 rounded border-gray-300"
                    checked={selected.has(index)}
                    onChange={() => toggleRow(index)}
                  />
                </TableCell>
                <TableCell className="font-medium text-sm text-gray-700">{task.name}</TableCell>
                <TableCell>
                  <Badge 
                    variant="outline" 
                    className={
                      task.priority === "High" 
                        ? "border-orange-200 text-orange-500 bg-orange-50 text-[11px] px-2 py-0.5" 
                        : "border-red-200 text-red-500 bg-red-50 text-[11px] px-2 py-0.5"
                    }
                  >
                    <Flag size={10} className="mr-1" />
                    {task.priority}
                  </Badge>
                </TableCell>
                <TableCell className="text-sm text-gray-600">{task.startDate}</TableCell>
                <TableCell>
                  <div className="flex -space-x-2">
                    {task.assignedTo.map((user, i) => (
                      <Avatar key={i} className="w-7 h-7 border-2 border-white">
                        <AvatarImage src={`https://i.pravatar.cc/150?img=${i + 10}`} />
                        <AvatarFallback>{user[0]}</AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                </TableCell>
                <TableCell className="text-sm text-gray-600">{task.dueDate}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                    {task.status}
                  </div>
                </TableCell>
                <TableCell>
                  <button className="text-gray-400 hover:text-gray-600">
                    <MoreVertical size={16} />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
