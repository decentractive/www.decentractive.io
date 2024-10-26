import { forwardRef } from "react"

import { nodeIconsLucide } from "@/lib/helpers"

import { IconComponentProps } from "@/types/components"

const IconComponent = forwardRef(
  ({ name, className, iconColor }: IconComponentProps, ref) => {
    const TargetIcon = nodeIconsLucide[name] ?? nodeIconsLucide["unknown"]
    return (
      <TargetIcon
        strokeWidth={1.5}
        className={className}
        style={iconColor ? { color: iconColor } : {}}
        ref={ref}
      />
    )
  },
)

export default IconComponent
