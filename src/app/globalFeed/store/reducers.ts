import {createFeature, createReducer, on} from '@ngrx/store'
import {GlobalFeedState} from '../types/globalFeedState.interface'
import {globalFeedActions} from './actions'

const initialState: GlobalFeedState = {
  popularTags: [],
  popularTagsIsLoading: false,
}

const globalFeedFeature = createFeature({
  name: 'globalFeed',
  reducer: createReducer(
    initialState,
    on(globalFeedActions.getTags, (state) => ({
      ...state,
      popularTagsIsLoading: true,
    })),
    on(globalFeedActions.getTagsSuccess, (state, action) => ({
      ...state,
      popularTagsIsLoading: false,
      popularTags: action.tags,
    })),
    on(globalFeedActions.getTagsFailure, (state) => ({
      ...state,
      isLoading: false,
    }))
  ),
})

export const {
  name: globalFeedFeatureKey,
  reducer: globalFeedReducer,
  selectPopularTagsIsLoading,
  selectPopularTags,
} = globalFeedFeature
