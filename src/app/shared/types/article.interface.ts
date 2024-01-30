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

  //TODO: Add Author Interface
}
