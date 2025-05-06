"use client";
import React from 'react';
import { TotalRevenue } from './components/total-revenue';
import { DailyTraffic } from './components/dailt-trafic';
import { GoogleMap } from './components/google-map';
import { ArrowUp } from 'lucide-react';

const StatItem = ({ 
  title, 
  value, 
  percentage, 
  comparisonText, 
  positive = true,
  isLast = false
}) => {
  return (
    <div className={`flex-1 flex flex-col items-start ${!isLast ? 'border-r border-gray-200' : ''} px-4`}>
      <span className="text-sm text-gray-600 font-medium">{title}</span>
      <span className="text-2xl text-gray-900 font-semibold mt-1">{value}</span>
      <div className='flex items-center gap-1 text-xs mt-1'>
        <span className={`flex p-1 gap-1 rounded-2xl font-medium ${positive ? 'text-green-600' : 'text-red-600'} bg-[#ECFDF3]`}>
          <ArrowUp className="w-[14px] h-[14px]" />
          {percentage}
        </span>
        <span className="text-gray-400">{comparisonText}</span>
      </div>
    </div>
  )
}

const Page = () => {
  const stats = [
    { 
      title: "Total Users",
      value: "12,410",
      percentage: "42%",
      comparisonText: "vs last month",
      positive: true
    },
    { 
      title: "Suspended Users",
      value: "51",
      percentage: "5%",
      comparisonText: "vs last month",
      positive: true
    },
    { 
      title: "Total Board Packs Uploaded",
      value: "124",
      percentage: "15%",
      comparisonText: "vs last month",
      positive: true
    },
    { 
      title: "Reports Generated",
      value: "39",
      percentage: "15%",
      comparisonText: "vs last month",
      positive: true
    }
  ];

  return (
    <div className='p-4'>
      <div className='flex bg-white rounded-lg shadow-sm border border-gray-100 p-4 w-full'>
        {stats.map((stat, index) => (
          <StatItem 
            key={stat.title}
            {...stat}
            isLast={index === stats.length - 1}
          />
        ))}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
        <div className="flex flex-col gap-4 col-span-1">
          <TotalRevenue />
          <DailyTraffic />
        </div>
        <div className="col-span-1 lg:col-span-2">
          <GoogleMap />
        </div>
      </div>
    </div>
  )
}

export default Page;