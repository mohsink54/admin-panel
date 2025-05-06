import * as React from "react";
import { cn } from "@/lib/utils";

const PrePostInput = React.forwardRef(
  ({ className, type, pre, post, ...props }, ref) => {
    return (
      <div
        className={cn(
          "flex items-center h-9 w-full rounded-md border border-input bg-transparent shadow-sm transition-colors focus-within:ring-1 focus-within:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
      >
        {pre && (
          <span className="px-2 text-muted-foreground flex items-center">
            {typeof pre === "string" ? <span>{pre}</span> : pre}
          </span>
        )}
        <input
          type={type}
          className={cn(
            "flex-1 bg-transparent px-0 py-1 text-base focus-visible:outline-none placeholder:text-muted-foreground md:text-sm ",
            !pre && "pl-0",
            !post && "pr-0"
          )}
          ref={ref}
          {...props}
        />
        {post && (
          <span className="px-2 text-muted-foreground flex items-center ">
            {typeof post === "string" ? <span>{post}</span> : post}
          </span>
        )}
      </div>
    );
  }
);

PrePostInput.displayName = "PrePostInput";

export { PrePostInput };