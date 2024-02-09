import {Component} from '@angular/core'
import {ArticleFormComponent} from 'src/app/shared/components/articleForm/articleForm.component'
import {ArticleFormValuesInterface} from 'src/app/shared/types/articleFormValues.interface'

@Component({
  selector: 'mc-create-article',
  templateUrl: './createArticle.component.html',
  standalone: true,
  imports: [ArticleFormComponent],
})
export class CreateArticleComponent {
  initialValues = {
    title: '',
    description: '',
    body: '',
    taglist: [],
  }

  onSubmit(articleFormValues: ArticleFormValuesInterface) {
    console.log('onsubmit in create article', articleFormValues)
  }
}
