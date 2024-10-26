import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { FC, PropsWithChildren } from "react"
import { Toaster } from "sonner"
import { WagmiProvider } from "wagmi"

import { config } from "@/lib/wagmi"

import { TooltipProvider } from "@/components/Tooltip"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      retryOnMount: false,
    },
  },
})

const AppProviders: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Toaster />
      <TooltipProvider>
        <WagmiProvider config={config}>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </WagmiProvider>
      </TooltipProvider>
    </>
  )
}

export default AppProviders
