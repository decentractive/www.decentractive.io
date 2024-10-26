import clsxm from "@/lib/clsxm"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={clsxm("animate-pulse rounded-md bg-border", className)}
      {...props}
    />
  )
}

export { Skeleton }
