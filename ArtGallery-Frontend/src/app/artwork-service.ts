import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtworkService {
  private apiUrl = 'https://localhost:7217/Artwork';

  constructor(private http: HttpClient) { }

  getArtworks(): Observable<any> {
    return this.http.get(`${this.apiUrl}/artworks`);
  }

  getArtworkByCategory(category: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/getArtworkByCategory?category=${category}`);
  }
  getArtworkById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/getArtworkById?id=${id}`);
  }
  addArtwork(artwork: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/addArtwork`, artwork);
  }
}