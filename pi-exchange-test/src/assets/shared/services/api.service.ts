import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiUrl: string = 'https://api.giphy.com/v1/gifs';
  apiKey: string = '40IEDYWqlEELoXooslq7p85R75cYdd4i';
  constructor(private http: HttpClient) {}

  getTrendyGif(
    limit: number = 10,
    rating: 'g' | 'pg' | 'pg-13' | 'r' = 'g'
  ): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/trending?api_key=${this.apiKey}&limit=${limit}&rating=${rating}`
    );
  }

  getGifsByIds(id: string[]): Observable<any> {
    return this.http.get(
      `${this.apiUrl}?api_key=${this.apiKey}&ids=${id.join(',')}`
    );
  }
}
