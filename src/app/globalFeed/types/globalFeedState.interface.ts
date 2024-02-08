import {PopularTagType} from 'src/app/shared/types/popularTagstype'

export interface GlobalFeedState {
  popularTags: PopularTagType[]
  popularTagsIsLoading: boolean
}
