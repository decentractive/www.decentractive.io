import { toBool } from "@/lib/helpers/toBool"

export const isProd = process.env.NODE_ENV === "production"
export const isLocal = process.env.NODE_ENV === "development"
export const showLogger = isLocal
  ? true
  : toBool(process.env.NEXT_PUBLIC_SHOW_LOGGER ?? false)
export const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://0.0.0.0:7860"

export const DISABLE_KYC_STATUS = toBool(
  process.env.NEXT_PUBLIC_DISABLE_KYC_STATUS,
)
export const DISABLE_KYC_SETTINGS = toBool(
  process.env.NEXT_PUBLIC_DISABLE_KYC_SETTINGS,
)
export const DISABLE_KYC_HELP = toBool(process.env.NEXT_PUBLIC_DISABLE_KYC_HELP)

export const DISABLE_KYB_STATUS = toBool(
  process.env.NEXT_PUBLIC_DISABLE_KYB_STATUS,
)
export const DISABLE_KYB_SETTINGS = toBool(
  process.env.NEXT_PUBLIC_DISABLE_KYB_SETTINGS,
)
export const DISABLE_KYB_HELP = toBool(process.env.NEXT_PUBLIC_DISABLE_KYB_HELP)
