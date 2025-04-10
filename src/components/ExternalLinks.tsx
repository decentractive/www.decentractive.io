import Link from "next/link"
import { FC } from "react"
import { RiLinkedinBoxFill, RiTwitterXFill } from "react-icons/ri"
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
      <ShadTooltip content="LinkedIn" side={tooltipSide} asChild>
        <Link
          href="https://www.linkedin.com/company/decentractive/about/"
          className="flex items-center gap-3"
          target="_blank"
          aria-label="LinkedIn"
        >
          <RiLinkedinBoxFill className="h-6 w-6 fill-current" />
          {showLabels && <span>LinkedIn</span>}
        </Link>
      </ShadTooltip>
      <ShadTooltip content="X" side={tooltipSide} asChild>
        <Link
          href="https://x.com/decentractive"
          className="flex items-center gap-3"
          target="_blank"
          aria-label="X"
        >
          <RiTwitterXFill className="h-5 w-5 fill-current" />
          {showLabels && <span>@decentractive</span>}
        </Link>
      </ShadTooltip>
      <ShadTooltip content="Github" side={tooltipSide} asChild>
        <Link
          href="https://github.com/decentractive"
          className="flex items-center gap-3"
          target="_blank"
          aria-label="GitHub"
        >
          <SiGithub className="h-5 w-5 fill-current" />
          {showLabels && <span>GitHub</span>}
        </Link>
      </ShadTooltip>
      <ShadTooltip content="GitBook" side={tooltipSide} asChild>
        <Link
          href="https://docs.decentractive.io"
          className="flex items-center gap-3"
          target="_blank"
          aria-label="Documentation"
        >
          <SiGitbook className="h-5 w-5 fill-current" />
          {showLabels && <span>Documentation</span>}
        </Link>
      </ShadTooltip>
    </nav>
  )
}

export default ExternalLinks
