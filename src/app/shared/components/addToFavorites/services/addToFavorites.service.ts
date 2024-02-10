import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {map, Observable} from 'rxjs'
import {Article} from 'src/app/shared/types/article.interface'
import {ArticleResponseInterface} from 'src/app/shared/types/articleResponse.interface'
import {environment} from 'src/environments/environment'

@Injectable()
export class AddToFavoritesService {
  constructor(private http: HttpClient) {}

  addToFavorites(slug: string): Observable<Article> {
    const url = this.getUrl(slug)
    return this.http
      .post<ArticleResponseInterface>(url, {})
      .pipe(map(this.getArticle))
  }

  removeFromFavorites(slug: string): Observable<Article> {
    const url = this.getUrl(slug)

    return this.http
      .delete<ArticleResponseInterface>(url)
      .pipe(map(this.getArticle))
  }

  getUrl(slug: string): string {
    return `${environment.apiUrl}/articles/${slug}/favorite`
  }

  getArticle(response: ArticleResponseInterface): Article {
    return response.article
  }
}
