import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, SlidersHorizontal, Square } from "lucide-react";

export function TimelineProject() {
  const timeSlots = ["07:00AM", "09:00AM", "10:00AM", "12:00PM", "03:00PM"];

  return (
    <Card className="border border-gray-200 shadow-none rounded-lg">
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded border border-gray-200">
            <Calendar size={16} className="text-gray-600" />
          </div>
          <CardTitle className="text-base font-semibold text-gray-900">Timeline Project</CardTitle>
        </div>
        <button className="p-2 hover:bg-gray-100 rounded-md border border-gray-200">
          <SlidersHorizontal size={14} className="text-gray-600" />
        </button>
      </CardHeader>
      <CardContent className="px-6 pb-6">
        <div className="-mx-6 px-6 overflow-x-auto sm:overflow-visible">
          <div className="min-w-[520px] sm:min-w-0">
            {/* Time slots */}
            <div className="grid grid-cols-5 mb-5 text-[11px] text-gray-500 font-medium">
              {timeSlots.map((time) => (
                <div key={time} className="text-center">{time}</div>
              ))}
            </div>

            {/* Timeline grid */}
            <div className="relative h-[190px] sm:h-[140px]">
              {/* Vertical grid lines aligned to label centers */}
              {timeSlots.map((time, index) => (
                <div
                  key={time}
                  className={`absolute top-0 bottom-0 border-l ${
                    index === 2 ? "border-orange-500 border-dashed" : "border-gray-200 border-dashed"
                  }`}
                  style={{ left: `calc(${(index + 0.5) * 20}% )` }}
                />
              ))}

              {/* Orange dot at 10:00AM */}
              <div
                className="absolute top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-orange-500"
                style={{ left: "calc(50%)" }}
              />

              {/* Task chips */}
              <div className="absolute inset-0 grid grid-cols-5">
                <div className="col-span-2 pl-2">
                  <div className="mt-4 bg-orange-50 border border-orange-100 rounded-lg px-3 py-2 flex items-center gap-2 w-fit">
                    <div className="p-1 bg-orange-200 rounded">
                      <Square size={12} className="text-orange-600 fill-orange-600" />
                    </div>
                    <span className="text-xs font-medium text-gray-900">Conduct team meeting</span>
                  </div>
                </div>
                <div className="col-span-3">
                  <div className="mt-4 ml-4 bg-cyan-50 border border-cyan-100 rounded-lg px-3 py-2 flex items-center gap-2 w-fit">
                    <div className="p-1 bg-cyan-200 rounded">
                      <Square size={12} className="text-cyan-600 fill-cyan-600" />
                    </div>
                    <span className="text-xs font-medium text-gray-900">Finalize presentations</span>
                  </div>
                </div>

                <div className="col-span-2 pl-6">
                  <div className="mt-[58px] bg-cyan-50 border border-cyan-100 rounded-lg px-3 py-2 flex items-center gap-2 w-fit">
                    <div className="p-1 bg-cyan-200 rounded">
                      <Square size={12} className="text-cyan-600 fill-cyan-600" />
                    </div>
                    <span className="text-xs font-medium text-gray-900">Clients Emails</span>
                  </div>
                </div>
                <div className="col-span-3">
                  <div className="mt-[86px] ml-6 bg-gray-100 border border-gray-200 rounded-lg px-3 py-2 flex items-center gap-2 w-fit">
                    <div className="p-1 bg-gray-300 rounded">
                      <Square size={12} className="text-gray-600 fill-gray-600" />
                    </div>
                    <span className="text-xs font-medium text-gray-900">Design Research</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
