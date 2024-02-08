import {Component, OnInit} from '@angular/core'
import {PopularTagService} from './../../services/popularTag.service'
import {Observable, tap} from 'rxjs'
import {PopularTagType} from '../../types/popularTagstype'
import {CommonModule} from '@angular/common'
import {Store} from '@ngrx/store'
import {globalFeedActions} from 'src/app/globalFeed/store/actions'
import {selectPopularTags} from 'src/app/globalFeed/store/reducers'

@Component({
  selector: 'mc-popular-tags',
  templateUrl: './popularTags.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class PopularTagsComponent implements OnInit {
  constructor(private store: Store) {}
  popularTags$: Observable<PopularTagType[]> | undefined
  ngOnInit(): void {
    this.store.dispatch(globalFeedActions.getTags())
    this.popularTags$ = this.store.select(selectPopularTags)
  }
}
