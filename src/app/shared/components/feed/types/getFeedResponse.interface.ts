import {Article} from 'src/app/shared/types/article.interface'

export interface GetFeedResponseInterface {
  articles: Article[]
  articleCount: number
}
