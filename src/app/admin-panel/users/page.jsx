"use client"
import { PrePostInput } from '@/components/ui/PrePostInput'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { CalendarIcon, ChevronRight, Ellipsis, Eye, PencilLineIcon, Plus, Search, Trash2Icon, UserX } from 'lucide-react'
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
import {users} from "@/app/db/index"
import { USerDetail } from './components/user-detail'
import DeleteDialog from '@/app/components/DeleteDialog'
import { SuspendUserDialog } from './components/suspend-user'
import { EditUser } from './components/edit-user'


const page = () => {
  const [date, setDate] = useState();
  const [userData, setUserData] = useState(users);
  const [showUserDetail, setShowUserDetail] = useState(false)
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showSuspendDialog, setShowSuspendDialog] = useState(false);
  const [suspendUser, setSuspendUser] = useState(null);
  const [showEditUser, setShowEditUser] = useState(false)

  const handleDeleteClick = (user) => {
    setSelectedUser(user);
    setShowDeleteDialog(true);
  };
  
  const handleConfirmDelete = () => {
    setUserData(prevData => prevData.filter(u => u.id !== selectedUser.id));
    setShowDeleteDialog(false);
  };

  const handleSuspendClick = (user) => {
    setSuspendUser(user);
    setShowSuspendDialog(true);
  };
  
  const handleConfirmSuspend = () => {
    setUserData(prevData =>
      prevData.map(u => 
        u.id === suspendUser.id ? { ...u, status: "suspended" } : u
      )
    );
    setShowSuspendDialog(false);
  };

  const handleEdit = (user) => {
    setSelectedUser(user);
    setShowEditUser(true);
  }

  return (
    <div className="grid grid-cols-1 py-6">
      <h4 className="text-[#171717] text-[20px] mb-4 font-semibold leading-5" >Platform Users List</h4>
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
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="suspended">Suspended</SelectItem>
              </SelectContent>
            </Select>

            <div className="w-full lg:w-80 hidden lg:inline-block">
            <PrePostInput className="w-full bg-[#1018280D]" pre={<Search className="h-[13px] w-[13px]" />} placeholder="Search by name" />
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
                  <TableHead className="text-[#2A2828] text-[12px]">Created Date</TableHead>
                  <TableHead className="text-[#2A2828] text-[12px]">Name</TableHead>
                  <TableHead className="text-[#2A2828] text-[12px]">Email</TableHead>
                  <TableHead className="text-[#2A2828] text-[12px]">Status</TableHead>
                  <TableHead className="text-[#2A2828] text-[12px]">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {userData.map((user) => (
                  <TableRow key={user.id} className="font-medium text-[12px] leading-[21.62px] -tracking-[2%] text-[#595858]">
                    <TableCell>
                      <div className="flex items-center">
                        <div className="md:text-[14px] leading-[21.62px] -tracking-[2%] text-[12px]">{user.dateCreated}</div>
                      </div>
                    </TableCell>
                    <TableCell style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '150px' }}>
                      {user.name}
                    </TableCell>
                    <TableCell style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '165px' }}>
                      {user.email}
                    </TableCell>
                    <TableCell>
                      <span className={cn(
                        "py-1 px-2 text-[10px] rounded-lg",
                        user.status === "active" ? "bg-[#EFFAF6] text-green-600" : "bg-red-100 text-red-600"
                      )}>
                        {user.status}
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
                        onClick={() => setShowUserDetail(true)}
                        >
                            <span>View Details</span> 
                            <Eye className="h-4 w-4" />
                          </div>
                          
                          <div 
                            className="flex items-center justify-between cursor-pointer gap-2 text-sm"
                            onClick={() => handleEdit(user)}
                          >
                            <span>Edit</span>
                            <PencilLineIcon className="h-4 w-4" />
                          </div>
                          
                          <div 
                            className="flex items-center justify-between cursor-pointer text-[#DC2626]/70 hover:text-[#DC2626] gap-2 text-sm"
                            onClick={() => handleDeleteClick(user)}
                          >
                            <span>Delete</span> 
                            <Trash2Icon className="h-4 w-4" />
                          </div>

                          <div 
                          className="flex items-center justify-between border-t-2 py-2 cursor-pointer gap-2 text-sm"
                          onClick={() => handleSuspendClick(user)}
                          >
                            <span>Suspend user</span> 
                            <UserX className="h-4 w-4" />
                          </div>
  
                        </PopoverContent>
                      </Popover>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <USerDetail open={showUserDetail} onClose={() => setShowUserDetail(false)} userData={userData} />

          <DeleteDialog
            open={showDeleteDialog}
            onClose={() => setShowDeleteDialog(false)}
            onConfirm={handleConfirmDelete}
          />
          <SuspendUserDialog
            open={showSuspendDialog}
            onClose={() => setShowSuspendDialog(false)}
            onConfirm={handleConfirmSuspend}
          />

          <EditUser
            open={showEditUser}
            onClose={() => setShowEditUser(false)}
          />
    </div>
  )
}

export default page