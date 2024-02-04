import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {environment} from 'src/environments/environment.development'
import {Observable, map} from 'rxjs'
import {PopularTagType} from '../types/popularTagstype'
import {PopularTagResponse} from '../components/popularTags/types/popularTagResponse.interface'

@Injectable({
  providedIn: 'root',
})
export class PopularTagService {
  constructor(private http: HttpClient) {}
  fullUrl = environment.apiUrl + '/tags'

  getPopularTag(): Observable<PopularTagType[]> {
    return this.http
      .get<PopularTagResponse>(this.fullUrl)
      .pipe(map((res) => res.tags))
  }
}
