import {Article} from 'src/app/shared/types/article.interface'

export interface ArticleStateInterface {
  isLoading: boolean
  error: string | null
  data: Article | null
}
