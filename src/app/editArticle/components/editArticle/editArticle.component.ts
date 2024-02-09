import {CommonModule} from '@angular/common'
import {Component, OnInit} from '@angular/core'
import {ActivatedRoute} from '@angular/router'
import {select, Store} from '@ngrx/store'
import {combineLatest, filter, map, Observable, tap} from 'rxjs'
import {ArticleFormComponent} from 'src/app/shared/components/articleForm/articleForm.component'
import {LoadingComponent} from 'src/app/shared/components/loading/loading.component'
import {Article} from 'src/app/shared/types/article.interface'
import {editArticleActions} from '../../store/actions'
import {
  selectIsSubmitting,
  selectValidationErrors,
  selectIsLoading,
  selectArticle,
} from '../../store/reducers'
import {ArticleFormValuesInterface} from 'src/app/shared/types/articleFormValues.interface'
import {ArticleRequestInterface} from 'src/app/shared/services/articleRequest.interface'

@Component({
  selector: 'mc-edit-article',
  templateUrl: './editArticle.component.html',
  standalone: true,
  imports: [ArticleFormComponent, CommonModule, LoadingComponent],
})
export class EditArticleComponent implements OnInit {
  initialValues$: Observable<ArticleFormValuesInterface> = this.store.pipe(
    select(selectArticle),
    filter((article): article is Article => article !== null),
    map((article: Article) => {
      return {
        title: article.title,
        description: article.description,
        body: article.body,
        tagList: article.tagList,
      }
    }),
    tap((d) => console.log(d))
  )
  slug = this.route.snapshot.paramMap.get('slug') ?? ''
  data$ = combineLatest({
    isSubmitting: this.store.select(selectIsSubmitting),
    backendErrors: this.store.select(selectValidationErrors),
    isLoading: this.store.select(selectIsLoading),
    initialValues: this.initialValues$,
  })

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.store.dispatch(editArticleActions.getArticle({slug: this.slug}))
  }

  onSubmit(articleFormValues: ArticleFormValuesInterface): void {
    const request: ArticleRequestInterface = {
      article: articleFormValues,
    }
    this.store.dispatch(
      editArticleActions.updateArticle({request, slug: this.slug})
    )
  }
}
