import { billingHistory } from "@/app/db"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { cn } from "@/lib/utils"
import { Ellipsis } from "lucide-react"
import { useState } from "react"

interface BillingHistoryDialogProps {
  open: boolean
  onClose: () => void
}

/* eslint-disable @typescript-eslint/no-unused-vars */


export function BillingHistoryDialog({ open, onClose }: BillingHistoryDialogProps) {
    const [billing, setBilling] = useState(billingHistory);
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="overflow-y-auto max-h-screen w-full sm:max-w-[70vw]">
      <DialogHeader>
        <DialogTitle className="sr-only">
            Billing History
        </DialogTitle>
        <DialogDescription className="sr-only">
            Transaction details shown here.
        </DialogDescription>
      </DialogHeader>
        <div className="grid p-4">
          <h2 className="text-sm font-semibold leading-[100%] text-[#2E2E2E] mb-1">Billing History</h2>

        <div className="overflow-x-auto mt-1 rounded-2xl border-1 border-[#EDEDED]">
                    <Table className="bg-white w-full">
                      <TableHeader>
                        <TableRow>
                          <TableHead className="text-[#2A2828] text-[12px] px-3">Invoice No.</TableHead>
                          <TableHead className="text-[#2A2828] text-[12px] px-3">Name</TableHead>
                          <TableHead className="text-[#2A2828] text-[12px] px-3">Status</TableHead>
                          <TableHead className="text-[#2A2828] text-[12px] px-3">Issued Date</TableHead>
                          <TableHead className="text-[#2A2828] text-[12px] px-3">Date</TableHead>
                          <TableHead className="text-[#2A2828] text-[12px]">Amount</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {billing.map((transaction) => (
                          <TableRow key={transaction.invoiceNo} className="font-medium text-[12px] leading-[21.62px] -tracking-[2%] text-[#595858]">
                            <TableCell>
                              <div className="flex items-center">
                                <div className="md:text-[14px] leading-[21.62px] -tracking-[2%] text-[12px]">
                                  {transaction.invoiceNo}</div>
                              </div>
                            </TableCell>
                            <TableCell style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '150px' }}>
                              {transaction.name}
                            </TableCell>
                            <TableCell>
                              <span className={cn(
                                "py-1 px-2 text-[10px] rounded-lg",
                                transaction.status === "Pending" ? "bg-[#FFF1E4] text-[#FFA048]" : "bg-[#EFFAF6] text-green-600" 
                              )}>
                                {transaction.status}
                              </span>
                            </TableCell>
                            <TableCell style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '165px' }}>
                              {transaction.issuedDate}
                            </TableCell>
                            <TableCell style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '165px' }}>
                              {transaction.date}
                            </TableCell>
                            <TableCell style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '165px' }}>
                              {transaction.amount}
                            </TableCell>
                            <TableCell>
                                  <Ellipsis />
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                  </div>
      </DialogContent>
    </Dialog>
  )
}
