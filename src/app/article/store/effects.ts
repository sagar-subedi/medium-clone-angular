import {inject} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {articleActions} from './actions'
import {catchError, map, of, switchMap, tap} from 'rxjs'
import {ArticleService as SharedArticleService} from 'src/app/shared/services/article.service'
import {Article} from 'src/app/shared/types/article.interface'
import {ArticleService} from '../services/article.service'
import {Router} from '@angular/router'

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

export const deleteArticleEffects = createEffect(
  (actions$ = inject(Actions), articleService = inject(ArticleService)) => {
    return actions$.pipe(
      ofType(articleActions.deleteArticle),
      switchMap((deleteArticle) => {
        //can use ({slug}) to directly access slug below
        return articleService.deleteArticle(deleteArticle.slug).pipe(
          map(() => articleActions.deleteArticleSuccess()),
          catchError(() => of(articleActions.deleteArticleFailure()))
        )
      })
    )
  },
  {
    functional: true,
  }
)

export const redirectEffect = createEffect(
  (actions$ = inject(Actions), router = inject(Router)) => {
    return actions$.pipe(
      ofType(articleActions.deleteArticleSuccess),
      tap(() => {
        router.navigateByUrl('/')
      })
    )
  },
  {
    functional: true,
    dispatch: false,
  }
)
