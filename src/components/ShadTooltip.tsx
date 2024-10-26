"use client"

import { FC, PropsWithChildren, ReactNode } from "react"

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/Tooltip"

interface ShadTooltipProps {
  className?: string
  content?: ReactNode | null
  side?: "top" | "right" | "bottom" | "left"
  asChild?: boolean
  delayDuration?: number
  sideOffset?: number
}

export const ShadTooltip: FC<PropsWithChildren<ShadTooltipProps>> = ({
  children,
  className,
  content,
  side,
  asChild,
  delayDuration = 500,
  sideOffset = undefined,
}) => {
  return (
    <Tooltip delayDuration={delayDuration}>
      <TooltipTrigger asChild={asChild}>{children}</TooltipTrigger>

      <TooltipContent
        className={className}
        side={side}
        avoidCollisions={false}
        sticky="always"
        sideOffset={sideOffset}
      >
        {content}
      </TooltipContent>
    </Tooltip>
  )
}
