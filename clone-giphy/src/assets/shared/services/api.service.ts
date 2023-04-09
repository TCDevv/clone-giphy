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
    limit: number = 25,
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

  GetGifById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}?api_key=${this.apiKey}`);
  }

  GetGifByQuery(query: string, limit: number = 50): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/search?api_key=${this.apiKey}&q=${query}&limit=${limit}&offset=1&rating=g&lang=en`
    );
  }
}
