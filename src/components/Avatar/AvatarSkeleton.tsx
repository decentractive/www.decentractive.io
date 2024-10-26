import { Skeleton } from "@/components/Skeleton"

export const AvatarSkeleton = (): JSX.Element => {
  return (
    <div className="skeleton-card">
      <div className="skeleton-card-wrapper">
        <Skeleton className="h-8 w-8 rounded-full" />
        <Skeleton className="h-4 w-[40%]" />
      </div>
    </div>
  )
}
