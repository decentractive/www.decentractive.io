import { BACKEND_URL } from "@/constant/env"
import { api } from "@/controllers/api/api"

import { Entity, EntityStatistic, ReviewType } from "@/types/api"

export async function getLoggedUser(): Promise<Entity | null> {
  try {
    const res = await api.get(`${BACKEND_URL}/users/whoami`)

    if (res.status === 200) {
      return res.data
    }
  } catch (error) {
    console.log("Error:", error)
    throw error
  }
  return null
}

export async function renewAccessToken() {
  return await api.post(`${BACKEND_URL}/refresh`)
}

export async function getTopReviews(topNumber: number) {
  const res = await api.get<ReviewType[]>(
    `${BACKEND_URL}/reviews/top/${topNumber}`,
  )
  return res.data
}

export async function getEntity(entityId: string) {
  const res = await api.get<Entity>(`${BACKEND_URL}/entities/${entityId}`)
  return res.data
}

export async function getEntityStatistic(entityId: string) {
  const res = await api.get<EntityStatistic>(
    `${BACKEND_URL}/entities/${entityId}/statistic`,
  )
  return res.data
}
