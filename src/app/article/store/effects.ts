import {inject} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {articleActions} from './actions'
import {catchError, map, of, switchMap} from 'rxjs'
import {ArticleService as SharedArticleService} from 'src/app/shared/services/article.service'
import {Article} from 'src/app/shared/types/article.interface'

export const articleEffects = createEffect(
  (
    actions$ = inject(Actions),
    sharedArticleService = inject(SharedArticleService)
  ) => {
    return actions$.pipe(
      ofType(articleActions.getArticle),
      switchMap((getArticle) => {
        //can use ({slug}) to directly access slug below
        return sharedArticleService.getArticle(getArticle.slug).pipe(
          map((article: Article) =>
            articleActions.getArticleSuccess({article})
          ),
          catchError(() => of(articleActions.getArticleFailure()))
        )
      })
    )
  },
  {
    functional: true,
  }
)
