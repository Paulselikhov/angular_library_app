import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { IFilm, IFilms, ISimilar, ITopFilms } from "../model/films.model";

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
    
    getTop250Films(page: number, type: string): Observable<{pageCount: number, films: ITopFilms[]}> {
        return this.http.get<{pageCount: number, films: ITopFilms[]}>(`${this.url}/top?page=${page}&type=${type}`, {headers: this.headers})
    }

    getFilms(query:{keyword:string}): Observable<{total: number, totalPages: number, items: IFilms[]}> {
        const {keyword} = query
        return this.http.get<{total: number, totalPages: number, items: IFilms[]}>(`${this.url}?ratingFrom=5&keyword=${keyword}`, {headers: this.headers})
            .pipe( 
                map( (next) => {
                    next.items = next.items.filter( i => i.ratingImdb && i.nameRu && i.year && i.ratingKinopoisk && i.type != 'TV_SHOW' && i.type != 'VIDEO') 
                    return next
                })
            )
    }

    getFilmById(id:number): Observable<IFilm> {
        return this.http.get<IFilm>(`${this.url}/${id}`, {headers: this.headers})
    }

    getSimilarsById(id:number): Observable<{total: number, items: ISimilar[]}> {
        return this.http.get<{total: number, items: ISimilar[]}>(`${this.url}/${id}/similars`, {headers: this.headers})
    }
}