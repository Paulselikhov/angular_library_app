import { Component, ViewChild } from '@angular/core';
import { FilmsService } from '../services/films.service';
import { pageCalc, throttle } from 'src/app/common/utils';
import { LazyLoadEvent } from 'primeng/api';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  @ViewChild(Table) dt!: Table
  
  public tableData: any[] = []
  private filmType!: string
  public cols: { header: string }[] = [
    { header: '№'},
    { header: 'Постер'},
    { header: 'Название'},
    //{ header: 'Английское'},
    { header: 'Страна'},
    { header: 'Жанр'},
    { header: 'Год выпуска'},
    { header: 'Продолжительность'},
    { header: 'Рейтинг'},
  ]
  
  public selectedTopFilm!: { id: string, name: string}
  public topFilmMenuItems: any[] = [
    {id: 'TOP_100_POPULAR_FILMS', name: 'Топ популярных фильмов'},
    {id: 'TOP_250_BEST_FILMS', name: 'Топ лучших фильмов'},
    {id: 'TOP_AWAIT_FILMS', name: 'Топ ожидаемых фильмов'},
  ]

  public searchFilmItems: any[] = []
  public searchFilmValue: string = ''
  public selectedSearchFilm: any
  
  
  
  constructor(private filmsService: FilmsService) {}

  public searchFilm = throttle( () => {
		this.filmsService.getFilms({keyword:this.searchFilmValue}).subscribe(res => {
      this.searchFilmItems = res.items
    })
	});

  public loadLazy(event:LazyLoadEvent){
    this.filmType = this.selectedTopFilm?.id ? this.selectedTopFilm.id : 'TOP_100_POPULAR_FILMS'
    const {page} = pageCalc(event.first!, event.rows!);
    this.filmsService.getTop250Films(page, this.filmType).subscribe( (res) => {
      res.films.map((i:any, index:any) => i.index = event.first + index + 1)
      this.tableData = res.films
    })  
  }



















  value = ''
  countries = [
    { name: 'Россия', code: 'RUS'},
    { name: 'Америка', code: 'ENG'},
    { name: 'Германия', code: 'GER'},
    { name: 'Германия', code: 'GER'},
    { name: 'Германия', code: 'GER'},
    { name: 'Германия', code: 'GER'},
    { name: 'Германия', code: 'GER'},

  ]
  selectedCountry = null
}
