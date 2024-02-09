import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {map, Observable} from 'rxjs'
import {ArticleRequestInterface} from 'src/app/shared/services/articleRequest.interface'
import {Article} from 'src/app/shared/types/article.interface'
import {ArticleResponseInterface} from 'src/app/shared/types/articleResponse.interface'
import {environment} from 'src/environments/environment.development'

@Injectable()
export class EditArticleService {
  constructor(private http: HttpClient) {}

  updateArticle(
    slug: string,
    articleRequest: ArticleRequestInterface
  ): Observable<Article> {
    const fullUrl = `${environment.apiUrl}/articles/${slug}`

    return this.http
      .put<ArticleResponseInterface>(fullUrl, articleRequest)
      .pipe(map((response) => response.article))
  }
}
