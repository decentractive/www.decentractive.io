import { FC, PropsWithChildren } from "react"
import { Toaster } from "sonner"

import { TooltipProvider } from "@/components/Tooltip"

const AppProviders: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Toaster />
      <TooltipProvider>{children}</TooltipProvider>
    </>
  )
}

export default AppProviders
