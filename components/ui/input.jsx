import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef((props, ref) => {
  const { className, type, ...restProps } = props;

  return (
    <input
      type={type}
      className={cn(
        "flex h-[48px] rounded-md border border-white/10  px-4 py-5 text-base placeholder:text-white/10 bg-primary focus:border-accent font-light outline-none",
        className
      )}
      ref={ref}
      {...restProps}
    />
  );
});

Input.displayName = "Input";

export { Input };
