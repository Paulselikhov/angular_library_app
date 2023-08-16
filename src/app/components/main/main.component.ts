import { Component, ViewChild } from '@angular/core';
import { FilmsService } from '../services/films.service';
import { pageCalc } from 'src/app/common/virtualScrollerUtils';
import { LazyLoadEvent } from 'primeng/api';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  @ViewChild(Table) dt!: Table;
  
  public films: any[] = []
  public topFilmItems: any[] = [
    {id: 'TOP_250_BEST_FILMS', name: 'Топ лучших фильмов'},
    {id: 'TOP_100_POPULAR_FILMS', name: 'Топ популярных фильмов'},
    {id: 'TOP_AWAIT_FILMS', name: 'Топ ожидаемых фильмов'},
  ]
  public selectedTopFilm: any
  private filmType: any
  
  constructor(private filmsService: FilmsService) {}


  loadLazy(event:LazyLoadEvent){
    this.filmType = this.selectedTopFilm?.id ? this.selectedTopFilm.id : 'TOP_100_POPULAR_FILMS'
    const {page} = pageCalc(event.first!, event.rows!);
    this.filmsService.getTop250Films(page, this.filmType).subscribe( (res) => {
      res.films.map((i:any, index:any) => i.index = event.first + index + 1)
      this.films = res.films
    })  
  }

  cols = [
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



















  value = null
  countries = [
    { name: 'Россия', code: 'RUS'},
    { name: 'Америка', code: 'ENG'},
    { name: 'Германия', code: 'GER'},
  ]
  selectedCountry = null
}
