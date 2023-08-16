import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({ 
    providedIn: 'root'
})

export class FilmsService {
    private url = 'https://kinopoiskapiunofficial.tech/api/v2.2/films'
    private key = 'dec3cfb4-ee86-4b1b-b0a3-a2d612a08a90';
    private defaultKey = '4fdefa42-48de-42c9-850e-7d2efd595fca' // 500 запросов в сутки
    private headers = {
        'X-API-KEY': this.key,
        'Content-Type': 'application/json',
    }
    constructor(private http: HttpClient) {}
    
    getTop250Films(page: number, type: string): Observable<any> {
        //type=TOP_250_BEST_FILMS
        //type=TOP_100_POPULAR_FILMS
        //type=TOP_AWAIT_FILMS
        return this.http.get(`${this.url}/top?page=${page}&type=${type}`, {headers: this.headers})
      }
}