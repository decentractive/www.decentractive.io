import { formatDistanceToNow } from "date-fns/formatDistanceToNow"

import {
  getStatisticColor,
  getStatusColor,
  gradients,
  localeNumber,
} from "@/lib/helpers"
import { useGetEntity, useGetEntityStatistic } from "@/hooks"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  ShadTooltip,
} from "@/components"
import { AvatarSkeleton } from "@/components/Avatar/AvatarSkeleton"
import IconComponent from "@/components/GenericIcon/IconComponent"

import { useDarkAtom } from "@/atom/darkAtom"

import { ReviewType } from "@/types/api"

type ReviewCardProps = {
  review: ReviewType
  className?: string
}

export const ReviewCard = ({ review: item }: ReviewCardProps) => {
  const { gradientIndex } = useDarkAtom()
  const { data: currentEntity, isLoading } = useGetEntity(item.entity_id)
  const { data: currentCompany, isLoading: isCompanyLoading } = useGetEntity(
    item.company_id,
  )
  const { data: currentCompanyStatistic } = useGetEntityStatistic(
    item.company_id,
  )
  const statusColors = getStatusColor(currentEntity?.status)
  const companyStatusColors = getStatusColor(currentCompany?.status)
  const companyStatisticColors = getStatisticColor(
    currentCompanyStatistic?.rating ?? 0,
  )

  return (
    <Card className="group cursor-pointer overflow-hidden">
      <CardHeader className="pb-0">
        <CardTitle className="card-component-title-display">
          {isLoading && <AvatarSkeleton />}
          {!isLoading && !!currentEntity && (
            <div className="flex items-center justify-between space-x-4 w-full">
              <div className="flex items-center gap-3 m-1">
                <Avatar className="h-9 w-9 focus-visible:outline-0 cursor-pointer overflow-hidden">
                  <AvatarImage src={currentEntity.profile_image} />
                  <AvatarFallback
                    className={`${gradients[gradientIndex]}`}
                  ></AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium leading-none">
                    <div className="grid grid-cols-[auto,auto] gap-2">
                      <div className="text-md font-semibold">
                        {currentEntity.fullname}
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {formatDistanceToNow(new Date(item.updated_at), {
                      addSuffix: true,
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="pb-3">
        <div className="card-component-desc-text text-left text-muted-foreground my-3">
          {item.review}
        </div>
        <div className="flex justify-between space-x-4">
          <ShadTooltip content="Reply to this review" asChild>
            <Button size="sm" variant="outline">
              <span className="hidden sm:block">
                <span className="text-sm">Reply to this review</span>
                <span className="ml-2">
                  <Badge className="rounded-full text-xs bg-accent hover:text-background text-card-foreground slashZero py-1">
                    {item.replies_count}
                  </Badge>
                </span>
              </span>
              <span className="sm:hidden">
                <IconComponent name="Reply" className="w-5 h-5" />
              </span>
            </Button>
          </ShadTooltip>
          <div className="mx-auto flex items-center gap-2">
            <ShadTooltip content="Helpful" asChild>
              <Button size="sm" variant="outline">
                <span className="hidden sm:block">
                  <span className="flex items-center gap-1">
                    <span className="text-sm">Helpful</span>
                    <span className="ml-1">
                      <Badge className="rounded-full text-xs bg-accent hover:text-background text-card-foreground slashZero py-1">
                        {item.helpful_count}
                      </Badge>
                    </span>
                  </span>
                </span>
                <span className="sm:hidden">
                  <IconComponent name="ThumbsUp" className="w-5 h-5" />
                </span>
              </Button>
            </ShadTooltip>
            <ShadTooltip content="Report" asChild>
              <Button size="sm" variant="outline">
                <span className="hidden sm:block">
                  <span className="flex items-center gap-1">
                    <span className="text-sm">Report</span>
                  </span>
                </span>
                <span className="sm:hidden">
                  <IconComponent name="Flag" className="w-5 h-5 mt-1" />
                </span>
              </Button>
            </ShadTooltip>
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t p-0">
        {isCompanyLoading && <AvatarSkeleton />}
        {!isCompanyLoading && !!currentCompany && !!currentCompanyStatistic && (
          <div className="flex items-center justify-between space-x-4 w-full">
            <span className="hidden sm:block pl-5">
              <div className="flex items-center gap-3 p-2">
                <Avatar className="h-8 w-8 focus-visible:outline-0 cursor-pointer overflow-hidden">
                  <AvatarImage src={currentCompany.profile_image} />
                  <AvatarFallback
                    className={`${gradients[gradientIndex]}`}
                  ></AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium leading-none">
                    <div className="grid grid-cols-[auto,auto] gap-2">
                      <div className="text-md font-medium">
                        {currentCompany.fullname}
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {currentCompany.website}
                  </div>
                </div>
              </div>
            </span>
            <span className="sm:hidden">
              <div className="text-md font-medium">
                {currentCompany.fullname}
              </div>
            </span>
            <div className="flex py-2 pr-5">
              <span className="hidden sm:block">
                <div className="grid grid-rows-[auto,auto]">
                  <div className="grid grid-cols-[auto,auto] gap-1">
                    <div
                      className={`text-xl font-semibold slashZero ${companyStatisticColors.text}`}
                    >
                      {localeNumber(currentCompanyStatistic.rating, {
                        maximumFractionDigits: 1,
                        minimumFractionDigits: 1,
                      })}
                    </div>
                    <div className="text-xs text-muted-foreground self-end pb-1">
                      out of 5
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {currentCompanyStatistic.total_reviews} reviews
                  </div>
                </div>
              </span>
              <span className="sm:hidden">
                <div className="grid grid-cols-[auto,auto]">
                  <div
                    className={`text-xl font-semibold slashZero ${companyStatisticColors.text}`}
                  >
                    {localeNumber(currentCompanyStatistic.rating, {
                      maximumFractionDigits: 1,
                      minimumFractionDigits: 1,
                    })}
                  </div>
                  <div className="text-xs text-muted-foreground self-end pb-1">
                    /5
                  </div>
                </div>
              </span>
            </div>
          </div>
        )}
      </CardFooter>
    </Card>
  )
}
