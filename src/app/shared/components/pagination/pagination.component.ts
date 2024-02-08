import {CommonModule} from '@angular/common'
import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core'
import {RouterLink} from '@angular/router'
import {UtilsService} from '../../services/utils.service'
import {Observable} from 'rxjs'
import {Store} from '@ngrx/store'
import {selectFeedData} from '../feed/store/reducers'
// import {UtilsService} from '../../services/utils.service'

@Component({
  selector: 'mc-pagination',
  templateUrl: './pagination.component.html',
  standalone: true,
  imports: [CommonModule, RouterLink],
})
export class PaginationComponent implements OnInit, OnChanges {
  @Input() total: number = 0
  @Input() limit: number = 20
  @Input() currentPage: number = 1
  @Input() url: string = ''

  pagesCount: number = 1
  pages: number[] = []
  @Input() data$: Observable<any> | undefined

  constructor(private utilsService: UtilsService, private store: Store) {}

  ngOnInit(): void {
    // this.data$ = this.store.select(selectFeedData)
    // this.data$.subscribe((data) => {
    //   this.pagesCount = Math.ceil(data.articlesCount / this.limit)
    //   this.pages =
    //     this.pagesCount > 0 ? this.utilsService.range(1, this.pagesCount) : []
    // })
  }

  //This lifecycle method is called everytime the input paramenter of the component change
  ngOnChanges(changes: SimpleChanges): void {
    this.pagesCount = Math.ceil(this.total / this.limit)
    this.pages =
      this.pagesCount > 0 ? this.utilsService.range(1, this.pagesCount) : []
  }
}
