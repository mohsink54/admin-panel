import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { England, Pakistan, US } from "../../../../../public/images";
import Image from "next/image";

interface EditUserProps {
    open: boolean
    onClose: () => void
}

const countries = [
  { code: "us", name: "United States", flag: US },
  { code: "gb", name: "England & Wales", flag: England },
  { code: "pk", name: "Pakistan", flag: Pakistan },
];

export function EditUser({open, onClose}: EditUserProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto rounded-xl">
        <DialogHeader>
          <DialogTitle>Edit User</DialogTitle>
          <p className="text-[#A9ACB4] text-[15.45px]">Please edit this user using these details.</p>
          <DialogDescription className="sr-only text-left font-medium text-[#000000] mt-2 text-sm leading-[24px]">
            Edit user details here.
          </DialogDescription>
          <hr className="my-1" />
        </DialogHeader>
        
        <div className="mt-4 space-y-4">
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
              <input
                type="text"
                defaultValue="John"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
              <input
                type="text"
                defaultValue="Doe"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div>

            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              defaultValue="johndoe@example.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
            />
            </div>
          </div>

          {/* Company Details Section */}
          <div className="pt-4">
            <span className="font-semibold text-lg text-gray-800">Company Details</span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                <input
                  type="text"
                  defaultValue="Sharps Devs"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Industry</label>
                <Select defaultValue="Finance">
                  <SelectTrigger className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md">
                    <SelectValue placeholder="Select industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Finance">Finance</SelectItem>
                    <SelectItem value="Technology">Technology</SelectItem>
                    <SelectItem value="Education">Education</SelectItem>
                    <SelectItem value="Telecommunications">Telecommunications</SelectItem>
                    <SelectItem value="Real-Estate">Real Estate</SelectItem>
                    <SelectItem value="Industrial">Industrial</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Publicly Listed</label>
                <Select defaultValue="yes">
                  <SelectTrigger className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <Select defaultValue="gb">
                  <SelectTrigger className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm">
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent>
                    {countries.map((country) => (
                      <SelectItem key={country.code} value={country.code}>
                        <div className="flex items-center gap-2">
                          <Image
                            src={country.flag}
                            alt={country.name}
                            width={20}
                            height={15}
                            className="h-4 w-6 object-cover"
                          />
                          <span>{country.name}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Website (Optional)
                </label>
                <div className="flex rounded-md border border-gray-300 shadow-sm">
                  <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 text-sm">
                    http://
                  </span>
                  <input
                    type="text"
                    defaultValue="www.figma.com"
                    className="block w-full min-w-0 flex-1 text-sm rounded-none rounded-r-md border-0 py-2 px-3 text-gray-900"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-between gap-4 font-medium text-sm leading-5 pt-4">
            <Button variant="outline" className="bg-[#F8F7FC]">Cancel</Button>
            <Button type="submit">Update user</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}