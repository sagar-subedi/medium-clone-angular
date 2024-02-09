import {Component, EventEmitter, Input, Output} from '@angular/core'
import {ArticleFormValuesInterface} from '../../types/articleFormValues.interface'
import {BackendErrorsInterface} from '../../types/backendErrors.interface'

@Component({
  selector: 'mc-article-form',
  templateUrl: './articleForm.component.html',
  standalone: true,
})
export class ArticleFormComponent {
  @Input() initialValue?: ArticleFormValuesInterface
  @Input() isSubmitting: boolean = false
  @Input() errors: BackendErrorsInterface | null = null

  @Output() articleSubmit = new EventEmitter<ArticleFormValuesInterface>()
}
