import { Tooltip } from "@/components/ui/tooltip";
import { Area, AreaChart, ResponsiveContainer } from "recharts";

const data = [
    {
      "name": "Page A",
      "uv": 4000,
      "pv": 2400,
      "amt": 2400
    },
    {
      "name": "Page B",
      "uv": 3000,
      "pv": 1398,
      "amt": 2210
    },
    {
      "name": "Page C",
      "uv": 2000,
      "pv": 9800,
      "amt": 2290
    },
    {
      "name": "Page D",
      "uv": 2780,
      "pv": 3908,
      "amt": 2000
    },
    {
      "name": "Page E",
      "uv": 1890,
      "pv": 4800,
      "amt": 2181
    },
    {
      "name": "Page F",
      "uv": 2390,
      "pv": 3800,
      "amt": 2500
    }
  ]
  

export function DailyTraffic() {
    return(
        <div className="mt-8 bg-[#FFFFFF] w-[350px] p-2 rounded-2xl">
            <div className="flex items-center justify-between">
                <div className="flex flex-col gap-4 mt-2 mb-4">
                    <span className="font-medium text-sm leading-5 text-[#2E2E2E]">Daily Traffic</span>
                    <span className="font-semibold text-lg leading-8 text-[#3D3D3D]">2.579 <span className="text-[11.95px] leading-5 text-[#000000]">visitors</span></span>

                    <span className="text-[13px] leading-[100%] text-[#727272]"><span className="text-primary">5.5%</span> increase per day</span>
                </div>
                <ResponsiveContainer width="50%" height={100}>
                    <AreaChart width={730} height={250} data={data}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#7C3AED" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#7C3AED" stopOpacity={0}/>
                            </linearGradient>
                            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <Tooltip />
                        <Area type="monotone" dataKey="uv" stroke="#7C3AED" fillOpacity={1} fill="url(#colorUv)" />
                        <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}