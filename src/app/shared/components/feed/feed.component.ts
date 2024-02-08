import {CommonModule} from '@angular/common'
import {Component, Input, OnInit} from '@angular/core'
import {ActivatedRoute, Params, Router, RouterLink} from '@angular/router'
import {Store} from '@ngrx/store'
import {Observable, combineLatest} from 'rxjs'
import {environment} from 'src/environments/environment'
import {ErrorMessageComponent} from '../errorMessage/errorMessage.component'
import {LoadingComponent} from '../loading/loading.component'
import {PaginationComponent} from '../pagination/pagination.component'
import {feedActions} from './store/actions'
import {selectError, selectFeedData, selectIsLoading} from './store/reducers'

@Component({
  selector: 'mc-feed',
  templateUrl: './feed.component.html',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ErrorMessageComponent,
    LoadingComponent,
    PaginationComponent,
  ],
})
export class FeedComponent implements OnInit {
  @Input() apiUrl: string = ''

  data$ = combineLatest({
    isLoading: this.store.select(selectIsLoading),
    error: this.store.select(selectError),
    feed: this.store.select(selectFeedData),
  })
  limit = environment.limit
  baseUrl = this.router.url.split('?')[0]
  currentPage: number = 0

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      console.log('params', params)
      this.currentPage = Number(params['page'] || '1')
      this.fetchFeed()
    })
  }

  fetchFeed(): void {
    this.store.dispatch(feedActions.getFeed({url: this.apiUrl}))
  }
}
