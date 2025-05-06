import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface SuspendUserDialogProps {
    open: boolean
    onClose: () => void
    onConfirm: () => void
}
 
 
export function SuspendUserDialog({open, onClose, onConfirm}: SuspendUserDialogProps){
    return(
        <Dialog open={open} onOpenChange={onClose}>
                <DialogContent className="sm:max-w-[375px]">
                    <DialogHeader>
                        <DialogTitle className="sr-only">Delete User</DialogTitle>
                        <DialogDescription className="text-center font-medium text-[#000000] mt-2 text-sm leading-[24px]">
                        Are you sure you want to suspended 
                        this user?
                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex justify-center mt-4">
                  <Button variant="outline" className="mr-2" onClick={onClose}>
                    Cancel
                  </Button>
                  <Button variant="destructive" className="ml-2" onClick={onConfirm}>
                    Yes, Suspend
                  </Button>
                </div>
                </DialogContent>
            </Dialog>
    )
}