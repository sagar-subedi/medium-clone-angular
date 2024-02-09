import {Component} from '@angular/core'
import {Store} from '@ngrx/store'
import {ArticleFormComponent} from 'src/app/shared/components/articleForm/articleForm.component'
import {ArticleFormValuesInterface} from 'src/app/shared/types/articleFormValues.interface'
import {createArticleActions} from '../../store/actions'
import {combineLatest} from 'rxjs'
import {selectIsSubmitting, selectValidationErrors} from '../../store/reducers'
import {CommonModule} from '@angular/common'
import {ArticleRequestInterface} from 'src/app/shared/services/articleRequest.interface'

@Component({
  selector: 'mc-create-article',
  templateUrl: './createArticle.component.html',
  standalone: true,
  imports: [ArticleFormComponent, CommonModule],
})
export class CreateArticleComponent {
  initialValues = {
    title: '',
    description: '',
    body: '',
    tagList: [],
  }

  data$ = combineLatest({
    isSubmitting: this.store.select(selectIsSubmitting),
    validationErrors: this.store.select(selectValidationErrors),
  })

  constructor(private store: Store) {}

  onSubmit(articleFormValues: ArticleFormValuesInterface) {
    const articleRequest: ArticleRequestInterface = {
      article: articleFormValues,
    }
    this.store.dispatch(
      createArticleActions.createArticle({request: articleRequest})
    )
  }
}
