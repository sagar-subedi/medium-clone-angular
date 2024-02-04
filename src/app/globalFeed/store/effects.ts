import {inject} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {globalFeedActions} from './actions'
import {catchError, map, of, switchMap} from 'rxjs'
import {PopularTagService} from 'src/app/shared/services/popularTag.service'
import {PopularTagType} from 'src/app/shared/types/popularTagstype'
import {feedActions} from 'src/app/shared/components/feed/store/actions'

export const globalFeedEffects = createEffect(
  (
    actions$ = inject(Actions),
    popularTagService = inject(PopularTagService)
  ) => {
    return actions$.pipe(
      ofType(globalFeedActions.getTags),
      switchMap(() => {
        return popularTagService.getPopularTag().pipe(
          map((tags: PopularTagType[]) =>
            globalFeedActions.getTagsSuccess({tags})
          ),
          catchError(() => of(feedActions.getFeedFailure()))
        )
      })
    )
  },
  {
    functional: true,
  }
)
