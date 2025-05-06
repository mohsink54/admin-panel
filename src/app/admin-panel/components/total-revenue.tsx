"use client"
import { Switch } from "@/components/ui/switch"
import { Tooltip, ResponsiveContainer, BarChart, Bar
} from "recharts"

const data = [
  { "name": "Page A", "uv": 4000, "pv": 2400 },
  { "name": "Page B", "uv": 3000, "pv": 1398 },
  { "name": "Page C", "uv": 2000, "pv": 9800 },
  { "name": "Page D", "uv": 2780, "pv": 3908 },
  { "name": "Page E", "uv": 1890, "pv": 4800 }
]

export function TotalRevenue () {
  return (
    <div className="mt-8 bg-[#FFFFFF] w-[350px] p-2 rounded-2xl">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-6 mt-2 mb-4">
          <span className="font-medium text-sm leading-5 text-[#2E2E2E]">Total Revenue</span>
          <span className="font-semibold text-lg leading-8 text-[#3D3D3D]">$32,672.345</span>
        </div>
        <ResponsiveContainer width="60%" height={100}>
          <BarChart data={data}>
            <Tooltip />
            <Bar dataKey="pv" fill="#7C3AED" radius={[10, 10, 10, 10]} />
            <Bar dataKey="uv" fill="#82ca9d" radius={[10, 10, 10, 10]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <hr className="my-3" />
      <div className="flex justify-between">
        <div className="flex items-center gap-1 text-[12px] leading-3 text-[#636363]">
          <Switch id="enable" />
          Trendline
        </div>
        <div className="items-center text-[12px] text-[#636363] leading-3">
          Total revenue from all sales
        </div>
      </div>
    </div>
  )
}
