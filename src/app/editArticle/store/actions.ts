import {createActionGroup, emptyProps, props} from '@ngrx/store'
import {ArticleRequestInterface} from 'src/app/shared/services/articleRequest.interface'
import {Article} from 'src/app/shared/types/article.interface'
import {BackendErrorsInterface} from 'src/app/shared/types/backendErrors.interface'

export const editArticleActions = createActionGroup({
  source: 'create article',
  events: {
    'Get article': props<{slug: string}>(),
    'Get article success': props<{article: Article}>(),
    'Get article failure': emptyProps(),

    'Update article': props<{request: ArticleRequestInterface; slug: string}>(),
    'Update article success': props<{article: Article}>(),
    'Update article failure': props<{errors: BackendErrorsInterface}>(),
  },
})
