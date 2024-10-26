import { useQuery } from "@tanstack/react-query"

import { getEntity, getEntityStatistic, getTopReviews } from "@/controllers/api"

export function useGetTopReviews() {
  const topNumber = 10
  return useQuery({
    queryKey: ["topReviews", topNumber],
    queryFn: () => getTopReviews(topNumber),
  })
}

export function useGetEntity(entityId: string) {
  return useQuery({
    queryKey: ["entity", entityId],
    queryFn: () => getEntity(entityId),
    enabled: !!entityId,
  })
}

export function useGetEntityStatistic(entityId: string) {
  return useQuery({
    queryKey: ["entityStatistic", entityId],
    queryFn: () => getEntityStatistic(entityId),
    enabled: !!entityId,
  })
}
