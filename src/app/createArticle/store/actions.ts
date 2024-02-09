import {createActionGroup, props} from '@ngrx/store'
import {ArticleRequestInterface} from 'src/app/shared/services/articleRequest.interface'
import {Article} from 'src/app/shared/types/article.interface'
import {BackendErrorsInterface} from 'src/app/shared/types/backendErrors.interface'

export const createArticleActions = createActionGroup({
  source: 'create article',
  events: {
    'Create Article': props<{request: ArticleRequestInterface}>(),
    'Create Article Success': props<{article: Article}>(),
    'Create Article Failure': props<{errors: BackendErrorsInterface}>(),
  },
})
