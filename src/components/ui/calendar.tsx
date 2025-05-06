"use client"

import * as React from "react"
import DatePicker from "react-datepicker" 
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import "react-datepicker/dist/react-datepicker.css" // import the css for react-datepicker

type CalendarProps = React.ComponentProps<typeof DatePicker>;

function Calendar({
  className,
  onChange,
  ...props
}: CalendarProps) {
  const handleChange = (date: Date | [Date | null, Date | null] | null, event?: React.SyntheticEvent) => {
    // If the date is an array (range selection), pass the appropriate value to the onChange
    if (Array.isArray(date)) {
      onChange?.(date as [Date | null, Date | null], event); // Handle range date selection
    } else {
      onChange?.(date as Date | null, event); // Handle single date selection
    }
  }

  return (
    <DatePicker
      selected={props.selected}
      onChange={handleChange}
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
