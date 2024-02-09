import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Observable, map} from 'rxjs'
import {ArticleRequestInterface} from 'src/app/shared/services/articleRequest.interface'
import {Article} from 'src/app/shared/types/article.interface'
import {ArticleFormValuesInterface} from 'src/app/shared/types/articleFormValues.interface'
import {ArticleResponseInterface} from 'src/app/shared/types/articleResponse.interface'
import {environment} from 'src/environments/environment.development'

@Injectable({
  providedIn: 'root',
})
export class CreateArticleService {
  constructor(private http: HttpClient) {}

  createArticle(articleRequest: ArticleRequestInterface): Observable<Article> {
    const fullUrl = `${environment.apiUrl}/articles`
    return this.http
      .post<ArticleResponseInterface>(fullUrl, articleRequest)
      .pipe(map((articleResponse) => articleResponse.article))
  }
}
