"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Pause, Play, ChevronDown, Calendar, MoreVertical } from "lucide-react";
import { useState, useEffect } from "react";

export function TimeTracker() {
  const [time, setTime] = useState({ hours: 32, minutes: 40, seconds: 10 });
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          let { hours, minutes, seconds } = prevTime;
          seconds++;
          if (seconds === 60) {
            seconds = 0;
            minutes++;
          }
          if (minutes === 60) {
            minutes = 0;
            hours++;
          }
          return { hours, minutes, seconds };
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (num: number) => num.toString().padStart(2, '0');

  return (
    <Card className="border-0 shadow-sm rounded-xs">
      <CardHeader className="flex flex-row items-center justify-between pb-3">
        <div className="flex items-center gap-2">
          <Clock size={18} className="text-gray-600" />
          <CardTitle className="text-sm font-medium text-gray-900">Time Tracker</CardTitle>
        </div>
        <button className="px-3 py-1.5 text-xs border border-gray-300 rounded-full hover:bg-gray-50 font-medium text-gray-700 flex items-center gap-1">
          <Clock size={12} />
          History
        </button>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          {/* Project Selector */}
          <div className="flex items-center justify-between px-3 py-2 bg-gray-100">
            <div className="flex items-center gap-2">
              <div className="grid grid-cols-2 gap-[2px]">
                <span className="w-2 h-2 rounded-sm bg-red-500"></span>
                <span className="w-2 h-2 rounded-sm bg-yellow-400"></span>
                <span className="w-2 h-2 rounded-sm bg-green-500"></span>
                <span className="w-2 h-2 rounded-sm bg-cyan-500"></span>
              </div>
              <span className="text-sm font-medium text-gray-700">slack.com Redesign</span>
            </div>
            <ChevronDown size={16} className="text-gray-500" />
          </div>

          <div className="p-4 space-y-4">
            {/* Date */}
            <div className="flex items-center justify-center">
              <div className="inline-flex items-center gap-2 text-xs text-gray-600 border border-gray-200 rounded-full px-3 py-1 bg-white">
                <Calendar size={12} />
                <span>Mon, 23 Apr 2025</span>
              </div>
            </div>

            {/* Timer Display */}
            <div className="text-center">
              <div className="text-[40px] font-bold tabular-nums text-gray-900">
                {formatTime(time.hours)}:{formatTime(time.minutes)}:{formatTime(time.seconds)}
              </div>
            </div>

            {/* Controls */}
            <div className="flex gap-2">
              <Button 
                className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg"
                onClick={() => setIsRunning(!isRunning)}
              >
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white/20 mr-2">
                  {isRunning ? (
                    <Pause size={12} className="text-white" />
                  ) : (
                    <Play size={12} className="text-white" />
                  )}
                </span>
                {isRunning ? "Pause" : "Resume"}
              </Button>
              <Button 
                variant="outline" 
                className="flex-1 border-gray-300 font-medium rounded-lg"
                onClick={() => {
                  setIsRunning(false);
                  setTime({ hours: 0, minutes: 0, seconds: 0 });
                }}
              >
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                Stop
              </Button>
            </div>
          </div>
        </div>

        {/* Previous Tasks */}
        <div className="border-t border-gray-200 pt-3">
          <p className="text-xs text-gray-500 mb-2.5">Previous Tasks</p>
          <div className="flex items-center justify-between p-2.5 bg-green-50 border border-green-200 rounded-md">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 bg-green-500 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Evernote App Redesign</p>
                <p className="text-xs text-gray-500">3.14.26</p>
              </div>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <MoreVertical size={16} />
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
