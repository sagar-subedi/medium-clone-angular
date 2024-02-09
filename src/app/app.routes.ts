import {Route} from '@angular/router'

export const appRoutes: Route[] = [
  {
    path: 'register',
    loadChildren: () =>
      import('src/app/auth/auth.routes').then((m) => m.registerRoutes),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('src/app/auth/auth.routes').then((m) => m.loginRoutes),
  },
  {
    path: '',
    loadChildren: () =>
      import('src/app/globalFeed/globalFeed.routes').then((m) => m.routes),
  },
  {
    path: 'articles/new',
    loadChildren: () =>
      import('src/app/createArticle/createArticle.routes').then(
        (m) => m.routes
      ),
  },
  {
    path: 'articles/:slug',
    loadChildren: () =>
      import('src/app/article/article.routes').then((m) => m.routes),
  },
  {
    path: 'articles/:slug/edit',
    loadChildren: () =>
      import('src/app/editArticle/editArticle.routes').then((m) => m.routes),
  },
]
