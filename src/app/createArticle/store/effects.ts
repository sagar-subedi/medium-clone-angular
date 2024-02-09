import {inject} from '@angular/core'
import {Router} from '@angular/router'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {switchMap, map, catchError, of, tap} from 'rxjs'
import {createArticleActions} from './actions'
import {CreateArticleService} from '../services/createArticle.service'
import {HttpErrorResponse} from '@angular/common/http'

export const createArticleEffects = createEffect(
  (
    actions$ = inject(Actions),
    articleService = inject(CreateArticleService)
  ) => {
    return actions$.pipe(
      ofType(createArticleActions.createArticle),
      switchMap(({request}) => {
        //can use ({slug}) to directly access slug below
        return articleService.createArticle(request).pipe(
          map((article) =>
            createArticleActions.createArticleSuccess({article})
          ),
          catchError((errorResponse: HttpErrorResponse) =>
            of(
              createArticleActions.createArticleFailure({
                errors: errorResponse.error.errors,
              })
            )
          )
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
      ofType(createArticleActions.createArticleSuccess),
      tap(({article}) => {
        router.navigateByUrl(`/articles/${article.slug}`)
      })
    )
  },
  {
    functional: true,
    dispatch: false,
  }
)
