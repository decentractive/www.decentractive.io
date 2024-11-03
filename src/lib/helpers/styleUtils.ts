import {
  BarChartHorizontal,
  Bell,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Flag,
  Gavel,
  GitFork,
  GlobeLock,
  Headset,
  Menu,
  MessageSquareReply,
  MessageSquareText,
  MoonIcon,
  Reply,
  RotateCcw,
  Settings,
  ShieldCheck,
  Smile,
  Star,
  SunIcon,
  Target,
  ThumbsUp,
  User,
  UserRoundPlus,
  Wallet,
  Zap,
} from "lucide-react"

import { EntityStatus } from "@/types/api"
import { IconsType } from "@/types/components"

export const gradients = [
  "bg-gradient-to-br from-gray-800 via-rose-700 to-violet-900",
  "bg-gradient-to-br from-green-200 via-green-300 to-blue-500",
  "bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-700",
  "bg-gradient-to-br from-green-200 via-green-400 to-purple-700",
  "bg-gradient-to-br from-blue-50 via-blue-300 to-blue-500",
  "bg-gradient-to-br from-purple-400 to-yellow-400",
  "bg-gradient-to-br from-red-800 via-yellow-600 to-yellow-500",
  "bg-gradient-to-br from-blue-300 via-green-200 to-yellow-300",
  "bg-gradient-to-br from-blue-700 via-blue-800 to-gray-900",
  "bg-gradient-to-br from-green-300 to-purple-400",
  "bg-gradient-to-br from-yellow-200 via-pink-200 to-pink-400",
  "bg-gradient-to-br from-green-500 to-green-700",
  "bg-gradient-to-br from-rose-400 via-fuchsia-500 to-indigo-500",
  "bg-gradient-to-br from-sky-400 to-blue-500",
  "bg-gradient-to-br from-green-200 via-green-400 to-green-500",
  "bg-gradient-to-br from-red-400 via-gray-300 to-blue-500",
  "bg-gradient-to-br from-gray-900 to-gray-600 bg-gradient-to-r",
  "bg-gradient-to-br from-rose-500 via-red-400 to-red-500",
  "bg-gradient-to-br from-fuchsia-600 to-pink-600",
  "bg-gradient-to-br from-emerald-500 to-lime-600",
  "bg-gradient-to-br from-rose-500 to-indigo-700",
  "bg-gradient-to-br bg-gradient-to-tr from-violet-500 to-orange-300",
  "bg-gradient-to-br from-gray-900 via-purple-900 to-violet-600",
  "bg-gradient-to-br from-yellow-200 via-red-500 to-fuchsia-500",
  "bg-gradient-to-br from-sky-400 to-indigo-900",
  "bg-gradient-to-br from-amber-200 via-violet-600 to-sky-900",
  "bg-gradient-to-br from-amber-700 via-orange-300 to-rose-800",
  "bg-gradient-to-br from-gray-300 via-fuchsia-600 to-orange-600",
  "bg-gradient-to-br from-fuchsia-500 via-red-600 to-orange-400",
  "bg-gradient-to-br from-sky-400 via-rose-400 to-lime-400",
  "bg-gradient-to-br from-lime-600 via-yellow-300 to-red-600",
]

export const nodeIconsLucide: IconsType = {
  SunIcon,
  MoonIcon,
  Bell,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  UserRoundPlus,
  Headset,
  Settings,
  Wallet,
  BarChartHorizontal,
  Smile,
  User,
  MessageSquareText,
  MessageSquareReply,
  ShieldCheck,
  GlobeLock,
  Star,
  RotateCcw,
  Target,
  Reply,
  Flag,
  ThumbsUp,
  Zap,
  Gavel,
  GitFork,
  Menu,
  Check,
}

export function getStatusColor(status: EntityStatus | undefined) {
  switch (status) {
    case "verified":
      return {
        border: "border-green-600",
        text: "text-green-600",
        background: "bg-green-200",
      }
    case "pending":
      return {
        border: "border-yellow-600",
        text: "text-yellow-600",
        background: "bg-yellow-200",
      }
    case "unverified":
      return {
        border: "border-orange-600",
        text: "text-orange-600",
        background: "bg-orange-200",
      }
    case "rejected":
      return {
        border: "border-red-600",
        text: "text-red-600",
        background: "bg-red-200",
      }
    default:
      return {
        border: "border-gray-600",
        text: "text-gray-600",
        background: "bg-gray-200",
      }
  }
}

export function getStatisticColor(value: number) {
  // value is between 0 and 5
  if (value >= 4) {
    return {
      border: "border-green-600",
      text: "text-green-600",
      background: "bg-green-50",
    }
  }
  if (value >= 3) {
    return {
      border: "border-yellow-600",
      text: "text-yellow-600",
      background: "bg-yellow-50",
    }
  }
  if (value >= 2) {
    return {
      border: "border-orange-600",
      text: "text-orange-600",
      background: "bg-orange-50",
    }
  }
  if (value >= 1) {
    return {
      border: "border-red-600",
      text: "text-red-600",
      background: "bg-red-50",
    }
  }
  return {
    border: "border-gray-600",
    text: "text-gray-600",
    background: "bg-gray-50",
  }
}
