"use client"
import { PrePostInput } from '@/components/ui/PrePostInput'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { CalendarIcon, Ellipsis, Eye, Plus, Search, } from 'lucide-react'
import { Calendar } from "@/components/ui/calendar"
import React, { useState } from 'react'
import { format } from "date-fns"
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import {transactions} from "@/app/db/index"
import {PaymentDetail} from './components/payment-detail'

const page = () => {
  const [date, setDate] = useState();
  const [transactionData, setTransactionData] = useState(transactions);
  const [showPaymentDetail, setShowPaymentDetail] = useState(false)
  const [activePage, setActivePage] = useState(1);
  const itemsPerPage = 9;
  const totalPages = Math.ceil(transactions.length / itemsPerPage);

  // Slice data for current page
  const currentPageData = transactionData.slice(
    (activePage - 1) * itemsPerPage,
    activePage * itemsPerPage
  );

  const handlePageClick = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setActivePage(pageNumber);
    }
  };


  return (
    <div className="grid grid-cols-1 py-6">
      
      <h4 className="text-[#171717] text-[20px] mb-4 font-semibold leading-5" >Users Payments</h4>
      {/* Search and other Filters */}
        <div className="flex flex-col-reverse md:flex-row gap-2 gap-y-2 md:items-center justify-between mb-4">
          <div className="flex flex-wrap gap-2 text-[#595858]">
            <Select>
              <SelectTrigger className="h-10 w-32 text-sm bg-white px-6">
                <Plus className="w-[11.36px] h-[11.36px]" />
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="this-week">This Week</SelectItem>
                <SelectItem value="this-month">This Month</SelectItem>
              </SelectContent>
            </Select>
  
            <Select>
              <SelectTrigger className="h-10 w-32 text-sm bg-white px-4">
                <Plus className="text-[#595858] w-[11.36px] h-[11.36px]" />
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Paid">Paid</SelectItem>
                <SelectItem value="Pending">Pending</SelectItem>
              </SelectContent>
            </Select>

            <div className="w-full lg:w-80 hidden lg:inline-block">
            <PrePostInput className="w-full bg-[#EFEFEF]" pre={<Search className="h-[13px] w-[13px]" />} placeholder="Search by name" />
            </div>
            <div className="w-full flex justify-end lg:w-auto">
              {/* <AddManagerDialog /> */}
            </div>
            <div className="w-full sm:w-30 lg:hidden inline-block mt-4 sm:mt-2">
              <PrePostInput className="w-full bg-[#1018280D]" pre={<Search className="h-5" />} placeholder="Search by name" />
            </div>
          </div>
          <div>
          <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
          </div>
        </div>
        <div className="overflow-x-auto mt-4 rounded-2xl border-1 border-[#EDEDED]">
            <Table className="bg-white w-full p-2">
              <TableHeader>
                <TableRow>
                  <TableHead className="text-[#2A2828] text-[12px] px-4">Transaction Id</TableHead>
                  <TableHead className="text-[#2A2828] text-[12px] px-4">Name</TableHead>
                  <TableHead className="text-[#2A2828] text-[12px] px-4">Amount</TableHead>
                  <TableHead className="text-[#2A2828] text-[12px] px-4">Discount code</TableHead>
                  <TableHead className="text-[#2A2828] text-[12px] px-4">Due Date</TableHead>
                  <TableHead className="text-[#2A2828] text-[12px] px-4">Status</TableHead>
                  <TableHead className="text-[#2A2828] text-[12px] px-4">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
              {currentPageData.map((transaction) => (
                  <TableRow key={transaction.id} className="font-medium text-[12px] leading-[21.62px] -tracking-[2%] text-[#595858]">
                    <TableCell>
                      <div className="flex items-center px-3">
                        <div className="leading-[17px] font-medium -tracking-[2%] text-[
                        10.46px] text-[#595858]">
                          {transaction.id}</div>
                      </div>
                    </TableCell>
                    <TableCell style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '150px' }}>
                      {transaction.name}
                    </TableCell>
                    <TableCell style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '165px' }}>
                      {transaction.amount}
                    </TableCell>
                    <TableCell style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '165px' }}>
                      {transaction.discount}
                    </TableCell>
                    <TableCell style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '165px' }}>
                      {transaction.dueDate}
                    </TableCell>
                    <TableCell>
                      <span className={cn(
                        "py-1 px-2 text-[10px] rounded-lg",
                        transaction.status === "Pending" ? "bg-[#FFF1E4] text-[#FFA048]" : "bg-[#EFFAF6] text-green-600" 
                      )}>
                        {transaction.status}
                      </span>
                    </TableCell>
                    <TableCell>
                      <Popover>
                        <PopoverTrigger>
                          <Ellipsis />
                        </PopoverTrigger>
                        <PopoverContent side="left" align="start" className="flex w-[201px] flex-col gap-y-3 border p-3">
                        <div 
                          className="flex items-center justify-between py-2 cursor-pointer gap-2 text-sm"
                          onClick={() => setShowPaymentDetail(true)}
                          >
                            <span>View Details</span> 
                            <Eye className="h-4 w-4" />
                          </div>
                          
  
                        </PopoverContent>
                      </Popover>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 sm:justify-items-stretch justify-items-center items-center">
          <div>
            <span className="text-sm text-gray-500">Showing {activePage} of {totalPages} pages</span>
          </div>
          <Pagination className="mt-2 sm:mt-0 md:justify-end">
            <PaginationContent className="max-w-fit justify-end">
              <PaginationItem className="max-w-fit justify-end">
                <PaginationPrevious 
                  className="cursor-pointer" 
                  onClick={() => handlePageClick(activePage - 1)} 
                  disabled={activePage === 1} 
                />
              </PaginationItem>
              {[...Array(totalPages)].map((_, idx) => (
                <PaginationItem key={idx}>
                  <PaginationLink 
                    className="cursor-pointer" 
                    onClick={() => handlePageClick(idx + 1)}
                    isActive={activePage === idx + 1}
                  >
                    {idx + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext 
                  className="cursor-pointer" 
                  onClick={() => handlePageClick(activePage + 1)} 
                  disabled={activePage === totalPages} 
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>

          <PaymentDetail open={showPaymentDetail} onClose={() => setShowPaymentDetail(false)} />
    </div>
  )
}

export default page