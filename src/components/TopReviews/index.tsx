import { FC } from "react"

import { useGetTopReviews } from "@/hooks"

import { ReviewCard } from "@/components/TopReviews/ReviewCard"
import { ReviewSkeleton } from "@/components/TopReviews/ReviewSkeleton"

type TopReviewsProps = {
  className?: string
}

const TopReviews: FC<TopReviewsProps> = ({ className }) => {
  const { data: reviews, isLoading } = useGetTopReviews()
  return (
    <>
      {isLoading ? (
        <>
          <li>
            <ReviewSkeleton />
          </li>
          <li>
            <ReviewSkeleton />
          </li>
          <li>
            <ReviewSkeleton />
          </li>
          <li>
            <ReviewSkeleton />
          </li>
        </>
      ) : (
        <>
          {!!reviews && reviews.length === 0 && (
            <li className="w-full h-0.5 mt-4 mb-6">
              <span className="text-sm text-muted-foreground">
                No projects found
              </span>
            </li>
          )}
          {reviews?.map((review) => (
            <li key={review.id}>
              <ReviewCard review={review} />
            </li>
          ))}
        </>
      )}
    </>
  )
}

export default TopReviews
