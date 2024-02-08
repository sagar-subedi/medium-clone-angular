import {Component} from '@angular/core'
import {BannerComponent} from 'src/app/shared/components/banner/banner.component'
import {FeedComponent} from 'src/app/shared/components/feed/feed.component'
import {PopularTagsComponent} from 'src/app/shared/components/popularTags/popularTag.component'
import {FeedTogglerComponent} from './feedToggler/feedToggler.component'
import {CommonModule} from '@angular/common'

@Component({
  selector: 'mc-global-feed',
  templateUrl: './globalFeed.component.html',
  standalone: true,
  imports: [
    FeedComponent,
    BannerComponent,
    PopularTagsComponent,
    FeedTogglerComponent,
    CommonModule,
  ],
})
export class GlobalFeedComponent {
  apiUrl = '/articles'
  currentFeed = 'home'

  toggleFeedHandler(feed: string) {
    this.currentFeed = feed
  }
}
