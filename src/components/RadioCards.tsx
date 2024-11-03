import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import React from "react"

import clsxm from "@/lib/clsxm"

const RadioCardsRoot = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => (
  <div className="grid">
    <RadioGroupPrimitive.Root
      {...props}
      ref={ref}
      className={clsxm(
        "grid grid-cols-[minmax(0,1fr)] md:grid-cols-3 gap-4",
        className,
      )}
    />
  </div>
))
RadioCardsRoot.displayName = "RadioCards.Root"

const RadioCardsItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => (
  <RadioGroupPrimitive.Item
    {...props}
    asChild={false}
    ref={ref}
    className={clsxm(
      "border-2 rounded-md p-4 flex items-top justify-center text-start data-[state=checked]:border-[#FF5557] data-[state=checked]:shadow-sm",
      className,
    )}
  />
))

RadioCardsItem.displayName = "RadioCards.Item"

export { RadioCardsItem, RadioCardsRoot }
