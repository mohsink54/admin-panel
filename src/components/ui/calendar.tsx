"use client"

import * as React from "react"
import DatePicker from "react-datepicker" 

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import "react-datepicker/dist/react-datepicker.css" // import the css for react-datepicker

function Calendar({
  className,
  ...props
}: React.ComponentProps<typeof DatePicker>) {
  return (
    <DatePicker
      selected={props.selected}
      onChange={props.onChange}
      inline
      className={cn("p-3", className)}
      popperPlacement="bottom"
      customInput={
        <button className={cn(buttonVariants({ variant: "outline" }))}>
          {props.selected ? props.selected.toDateString() : "Select Date"}
        </button>
      }
      {...props}
    />
  )
}

export { Calendar }
