import {ProfileInterface} from './profile.interface'

export interface Article {
  body: string
  createdAt: string
  description: string
  favorited: boolean
  favoritesCount: number
  slug: string
  taglist: string[]
  title: string
  updatedAt: string
  author: ProfileInterface
}
