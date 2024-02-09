import {Component, OnInit} from '@angular/core'
import {ActivatedRoute, RouterLink} from '@angular/router'
import {Store} from '@ngrx/store'
import {combineLatest, filter, map} from 'rxjs'
import {selectCurrentUser} from '../auth/store/reducer'
import {selectArticleData, selectError, selectIsLoading} from './store/reducers'
import {CurrentUserInterface} from './../shared/types/currentUser.interface'
import {articleActions} from './store/actions'
import {ErrorMessageComponent} from '../shared/components/errorMessage/errorMessage.component'
import {LoadingComponent} from '../shared/components/loading/loading.component'
import {CommonModule} from '@angular/common'
import {TagListComponent} from '../shared/components/tagList/tagList.component'

@Component({
  selector: 'mc-article',
  templateUrl: './article.component.html',
  standalone: true,
  imports: [
    RouterLink,
    ErrorMessageComponent,
    LoadingComponent,
    CommonModule,
    TagListComponent,
  ],
})
export class ArticleComponent implements OnInit {
  slug = this.route.snapshot.paramMap.get('slug') ?? ''

  isAuthor$ = combineLatest({
    currentUser: this.store
      .select(selectCurrentUser)
      .pipe(
        filter((user): user is CurrentUserInterface | null => user != undefined)
      ),
    article: this.store.select(selectArticleData),
  }).pipe(
    map(({currentUser, article}) => {
      if (!currentUser || !article) {
        return false
      }
      return currentUser.username === article.author.username
    })
  )

  data$ = combineLatest({
    isLoading: this.store.select(selectIsLoading),
    error: this.store.select(selectError),
    article: this.store.select(selectArticleData),
    isAuthor: this.isAuthor$,
  })

  constructor(private route: ActivatedRoute, private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(articleActions.getArticle({slug: this.slug})) //{slug} => {slug: slug} so it doesn't work, must explicitly specify this.slug
  }

  editArticle() {}

  deleteArticle() {
    this.store.dispatch(articleActions.deleteArticle({slug: this.slug}))
  }
}
