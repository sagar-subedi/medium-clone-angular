import {Component} from '@angular/core'
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms'
import {Store} from '@ngrx/store'
import {authActions} from '../../store/actions'
import {RegisterRequestInterface} from '../../types/registerRequest.interface'
import {RouterLink} from '@angular/router'
import {selectIsSubmitting} from '../../store/reducer'
import {AuthStateInterface} from '../../types/authState.interface'
import {CommonModule} from '@angular/common'
import {AuthService} from '../../services/auth.service'

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, CommonModule],
})
export class RegisterComponent {
  isSubmitting$ = this.store.select(selectIsSubmitting)

  form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  })

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private authService: AuthService
  ) {}

  onSubmit() {
    console.log('form', this.form.getRawValue())

    const request: RegisterRequestInterface = {
      user: this.form.getRawValue(),
    }

    this.store.dispatch(authActions.register({request}))
  }
}
