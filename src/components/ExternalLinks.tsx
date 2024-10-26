import Link from "next/link"
import { FC } from "react"
import { RiTwitterXFill } from "react-icons/ri"
import { SiGitbook, SiGithub } from "react-icons/si"

import clsxm from "@/lib/clsxm"

import { ShadTooltip } from "@/components"

type ExternalLinksProps = {
  className?: string
  showHelp?: boolean
  showLabels?: boolean
  tooltipSide?: "top" | "right" | "bottom" | "left"
}

const ExternalLinks: FC<ExternalLinksProps> = ({
  className,
  showLabels = false,
  tooltipSide = "top",
}) => {
  return (
    <nav
      className={clsxm(
        "flex justify-center gap-6 fill-white md:justify-start",
        className,
      )}
      aria-label="Links"
    >
      <ShadTooltip content="X" side={tooltipSide} asChild>
        <Link
          href="https://twitter.com/decentractive"
          className="flex items-center gap-3"
          target="_blank"
        >
          <RiTwitterXFill className="h-5 w-5 fill-current" />
          {showLabels && <span>@decentractive</span>}
        </Link>
      </ShadTooltip>
      <ShadTooltip content="Github" side={tooltipSide} asChild>
        <Link
          href="https://github.com/HedgifyX"
          className="flex items-center gap-3"
          target="_blank"
        >
          <SiGithub className="h-5 w-5 fill-current" />
          {showLabels && <span>GitHub</span>}
        </Link>
      </ShadTooltip>
      <ShadTooltip content="GitBook" side={tooltipSide} asChild>
        <Link
          href="https://docs.licite.xyz"
          className="flex items-center gap-3"
          target="_blank"
        >
          <SiGitbook className="h-5 w-5 fill-current" />
          {showLabels && <span>Documentation</span>}
        </Link>
      </ShadTooltip>
    </nav>
  )
}

export default ExternalLinks
