export type EntityStatus = "verified" | "unverified" | "pending" | "rejected"
export type EntityType = "user" | "company"

export type Entity = {
  id: string
  fullname: string
  email: string
  is_active: boolean
  type: EntityType
  status: EntityStatus
  profile_image: string
  website: string
  create_at: Date
  updated_at: Date
}

export type EntityStatistic = {
  id: string
  entity_id: string
  rating: number
  total_reviews: number
  total_replies: number
  total_helpful: number
  total_views: number
  total_followers: number
  total_following: number
  create_at: Date
  updated_at: Date
}

export type ReviewType = {
  id: string
  entity_id: string
  company_id: string
  review: string
  rating: number
  replies_count: number
  helpful_count: number
  create_at: Date
  updated_at: Date
  parent_review_id: string
}
