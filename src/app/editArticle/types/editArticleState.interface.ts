import {Article} from 'src/app/shared/types/article.interface'
import {BackendErrorsInterface} from 'src/app/shared/types/backendErrors.interface'

export interface EditArticleStateInterface {
  article: Article | null
  isLoading: boolean
  isSubmitting: boolean
  validationErrors: BackendErrorsInterface | null
}
