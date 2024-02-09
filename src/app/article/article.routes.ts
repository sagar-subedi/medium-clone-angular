import {Route} from '@angular/router'
import {ArticleComponent} from './article.component'
import {provideState} from '@ngrx/store'
import {provideEffects} from '@ngrx/effects'
import {articleFeatureKey, articleReducer} from './store/reducers'
import * as articleEffects from './store/effects'
import {ArticleService} from '../shared/services/article.service'

export const routes: Route[] = [
  {
    path: '',
    component: ArticleComponent,
    providers: [
      provideEffects(articleEffects), //provide expects an object with effect with key value pairs
      provideState(articleFeatureKey, articleReducer),
      ArticleService,
    ],
  },
]
