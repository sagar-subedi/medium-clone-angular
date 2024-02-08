import {createActionGroup, emptyProps, props} from '@ngrx/store'
import {PopularTagType} from 'src/app/shared/types/popularTagstype'

export const globalFeedActions = createActionGroup({
  source: 'popular tags',
  events: {
    'Get Tags': emptyProps(),
    'Get Tags Success': props<{tags: PopularTagType[]}>(),
    'Get Tags Failure': emptyProps(),
  },
})
