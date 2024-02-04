import {bootstrapApplication} from '@angular/platform-browser'
import {AppComponent} from './app/app.component'
import {provideRouter} from '@angular/router'
import {appRoutes} from './app/app.routes'
import {provideState, provideStore} from '@ngrx/store'
import {provideStoreDevtools} from '@ngrx/store-devtools'
import {isDevMode} from '@angular/core'
import {authFeatureKey, authReducer} from './app/auth/store/reducer'
import {CommonModule} from '@angular/common'
import {provideHttpClient, withInterceptors} from '@angular/common/http'
import {provideEffects} from '@ngrx/effects'
import * as authEffects from './app/auth/store/effects'
import {provideRouterStore, routerReducer} from '@ngrx/router-store'
import {authInterceptor} from './app/shared/services/authInterceptor'
import * as feedEffects from './app/shared/components/feed/store/effects'
import * as globalFeedEffects from './app/globalFeed/store/effects'
import {
  feedFeatureKey,
  feedReducer,
} from './app/shared/components/feed/store/reducers'
import {
  globalFeedFeatureKey,
  globalFeedReducer,
} from './app/globalFeed/store/reducers'

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes),
    provideStore({
      router: routerReducer,
    }),
    provideHttpClient(withInterceptors([authInterceptor])),
    CommonModule,
    provideState(authFeatureKey, authReducer),
    provideState(feedFeatureKey, feedReducer),
    provideState(globalFeedFeatureKey, globalFeedReducer),
    provideEffects(authEffects, feedEffects, globalFeedEffects),
    provideRouterStore(),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75,
    }),
  ],
})
