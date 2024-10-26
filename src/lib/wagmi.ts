import { getDefaultConfig } from "@rainbow-me/rainbowkit"
import {
  arbitrum,
  base,
  mainnet,
  optimism,
  polygon,
  sepolia,
} from "wagmi/chains"

export const config = getDefaultConfig({
  appName: "CaaS-app",
  projectId: "1b4b12e268b2010925810144b78d309f",
  chains: [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true" ? [sepolia] : []),
  ],
  ssr: true,
})
