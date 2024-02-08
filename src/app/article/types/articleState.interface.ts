import {Article} from 'src/app/shared/types/article.interface'
import {ArticleResponseInterface} from 'src/app/shared/types/articleResponse.interface'

export interface ArticleStateInterface {
  isLoading: boolean
  error: string | null
  data: Article | null
}
