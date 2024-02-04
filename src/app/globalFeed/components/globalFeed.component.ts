import {Component} from '@angular/core'
import {BannerComponent} from 'src/app/shared/components/banner/banner.component'
import {FeedComponent} from 'src/app/shared/components/feed/feed.component'
import {PopularTagsComponent} from 'src/app/shared/components/popularTags/popularTag.component'

@Component({
  selector: 'mc-global-feed',
  templateUrl: './globalFeed.component.html',
  standalone: true,
  imports: [FeedComponent, BannerComponent, PopularTagsComponent],
})
export class GlobalFeedComponent {
  apiUrl = '/articles'
}
