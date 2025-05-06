import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { ArrowLeft, Check, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react"
import { PaymentUser } from "../../../../../public/images";
import { Button } from "@/components/ui/button";

interface UserDetailsProps {
    open:boolean
    onClose: ()=> void
}

export function USerDetail({ open, onClose}: UserDetailsProps){
    const[isSuspendedDialogOpen, setIsSuspendedDialogOpen] = useState(false);

    return(
        <>
            <Sheet open ={open} onOpenChange={onClose}>
                <SheetContent className="overflow-y-auto max-h-screen w-full sm:max-w-[450px]">
                    <SheetHeader>
                        <ArrowLeft onClick={onClose} className="h-6 w-6 cursor-pointer" />
                        <SheetTitle className="sr-only">
                            User Detail
                        </SheetTitle>
                        <SheetDescription className="sr-only">
                            User details shown here.
                        </SheetDescription>
                    </SheetHeader>
                    <div className="grid gap-4 px-3 mb-4">
                        <div className="grid grid-cols-4 items-center gap-4 ml-0">
                            <Image src={PaymentUser} alt="User Profile Image" className="h-[82px] w-[82px] rounded-full" />
                            <div className="col-span-3 flex flex-col gap-1">
                            <h4 className="text-lg font-semibold text-[#000000B2]">Jerome Bell</h4>
                            <span className="sm:text-[17px] font-normal sm:leading-[30px] text-[#000000B2]">jerome.bell@example.com</span>
                            </div>
                        </div>

                        <div className="bg-[#FAFAFA] rounded-lg shadow-sm p-3 max-w-md">
                            <div className="flex flex-col gap-2" >

                            <div className="flex bg-[#FFFFFF] w-full h-11 items-center justify-between rounded-lg p-2">
                            <span className="font-normal text-[13px] text-[#151515]">Joined</span>
                            <span className="font-normal text-[14px] text-[#151515]">26, Aug 2024 </span>
                            </div>
                        
                            <div className="flex bg-[#FFFFFF] w-full h-11 items-center justify-between rounded-lg p-2">
                            <span className="font-normal text-[13px] text-[#151515]">Status</span>
                            <span className="font-normal text-[14px] text-[#151515]">Active</span>
                            </div>
                            </div>
                        </div>
                        <div className="bg-[#FAFAFA] rounded-lg shadow-sm p-3 max-w-md">
                            <div className="flex flex-col gap-2" >
                                <div className="flex bg-[#FFFFFF] w-full h-11 items-center justify-between rounded-lg p-2">
                                    <span className="font-normal text-[13px] text-[#151515]">Company Name</span>
                                    <span className="font-normal text-[14px] text-[#151515]">Sharps Devs</span>
                                </div>
                        
                                <div className="flex bg-[#FFFFFF] w-full h-11 items-center justify-between rounded-lg p-2">
                                    <span className="font-normal text-[13px] text-[#151515]">Finance</span>
                                    <span className="font-normal text-[14px] text-[#151515]">Finance</span>
                                </div>
                                <div className="flex bg-[#FFFFFF] w-full h-11 items-center justify-between rounded-lg p-2">
                                    <span className="font-normal text-[13px] text-[#151515]">Publicly Listed</span>
                                    <span className="font-normal text-[14px] text-[#151515]">Yes</span>
                                </div>
                                <div className="flex bg-[#FFFFFF] w-full h-11 items-center justify-between rounded-lg p-2">
                                    <span className="font-normal text-[13px] text-[#151515]">Location</span>
                                    <span className="font-normal text-[14px] text-[#151515]">England & Wales</span>
                                </div>
                                <div className="flex bg-[#FFFFFF] w-full h-11 items-center justify-between rounded-lg p-2">
                                    <span className="font-normal text-[13px] text-[#151515]">Website</span>
                                    <div className="bg-primary h-[25px] w-[130px] rounded cursor-pointer flex items-center justify-center">
                                        <span className="font-normal text-[14px] text-white p-1">www.figma.com</span>
                                        <ChevronRight className="text-white" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#FAFAFA] rounded-lg shadow-sm p-3 max-w-md">
                            <h2 className="text-sm font-medium text-gray-900 mb-4">Active Plan</h2>
                            <div className="flex flex-col gap-2" >

                            <div className="flex bg-primary w-full h-11 items-center justify-between rounded-lg p-2">
                            <div className="flex items-center gap-2">
                                <Check className="h-5 w-5 bg-white rounded-full text-primary" />
                                <h3 className="font-normal text-[#FAFAFA] text-[13px]">Pro plan</h3>
                            </div>
                            <p className="font-normal text-[#FAFAFA] text-[14px]">$114/ Monthly</p>
                            </div>

                            <div className="flex bg-[#FFFFFF] w-full h-11 items-center justify-between rounded-lg p-2">
                            <span className="font-normal text-[13px] text-[#151515]">Due Date</span>
                            <span className="font-normal text-[14px] text-[#151515]">20 Mar 2025</span>
                            </div>
                        
                            <div className="flex bg-[#FFFFFF] w-full h-11 items-center  justify-between rounded-lg p-2">
                            <span className="font-normal text-[13px] text-[#151515]">Discount</span>
                            <span className="font-normal text-[14px] text-[#151515]">32%</span>
                            </div>
                        
                            <div className="flex bg-[#FFFFFF] w-full h-11 items-center justify-between rounded-lg p-2">
                            <span className="font-normal text-[13px] text-[#151515]">Discount code</span>
                            <span className="font-normal text-[14px] text-[#151515]">SAVE10</span>
                            </div>
                            </div>
                        </div>
                    <Button variant="destructive" className="bg-[#EB9090]">Suspend user</Button>
                    </div>
                </SheetContent>
            </Sheet>
        </>
    )
}