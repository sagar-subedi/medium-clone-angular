import {createActionGroup, emptyProps, props} from '@ngrx/store'
import {Article} from 'src/app/shared/types/article.interface'

export const articleActions = createActionGroup({
  source: 'article',
  events: {
    'Get Article': props<{slug: string}>(),
    'Get Article Success': props<{article: Article}>(),
    'Get Article Failure': emptyProps(),
  },
})
