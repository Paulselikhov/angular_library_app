import { Component, ViewChild } from '@angular/core';
import { FilmsService } from '../services/films.service';
import { pageCalc, throttle } from 'src/app/common/utils';
import { LazyLoadEvent } from 'primeng/api';
import { Table } from 'primeng/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  @ViewChild(Table) dt!: Table
  public kinopoiskId!: number

  public isTableShow: boolean = false
  public isAboutFilmShow: boolean = false
  public isListboxShow: boolean = false

  public tableData: any[] = []
  public cols: { header: string }[] = [
    { header: '№'},
    { header: 'Постер'},
    { header: 'Название'},
    { header: 'Жанр'},
    { header: 'Страна'},
    { header: 'Год'},
    { header: 'Длительность'},
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

  public selectedFilm: any
  
  constructor(
    private filmsService: FilmsService,
    private router: Router,
  ) {}
  
  //события обновления id
  onRowSelect(e:{data:{filmId:number}}){
    this.showTable(false)
    this.showAboutFilm(true)

    //Сброс значения для топ. фильмов
    this.selectedTopFilm = { id: '', name: ''}
    //Обновляем id
    this.kinopoiskId = e.data.filmId
  }
  onSearchedFilmClick(e:{kinopoiskId: number}){
    this.showListBox(false)
    this.showTable(false)
    this.showAboutFilm(true)

    //Сброс значения для топ. фильмов
    this.selectedTopFilm = { id: '', name: ''}
    //Обновляем id
    this.kinopoiskId = e.kinopoiskId
    
  }

  //события для скрытия/показа
  checkEvent($event:any){
    $event.relatedTarget?.offsetParent?.id ? this.showListBox(true): this.showListBox(false)
  }
  showListBox(value:boolean){
    this.searchFilmValue ? this.isListboxShow = value : this.isListboxShow = false
  }
  showTable(value:boolean){
    this.dt?.reset()
    this.isTableShow = value
  }
  showAboutFilm(value:boolean){
    this.isAboutFilmShow = value
  }

  //поиск
  onSearchFilmChange = throttle( () => {
    this.showListBox(true)
		this.filmsService.getFilms({keyword:this.searchFilmValue}).subscribe(res => {
      this.searchFilmItems = res.items
    })
	});
  
  //Загрузка таблицы
  loadLazy(event:LazyLoadEvent){
    const {page} = pageCalc(event.first!, event.rows!);
    if(this.selectedTopFilm?.id){
      this.filmsService.getTop250Films(page, this.selectedTopFilm?.id).subscribe( (res) => {
        res.films.map((i:any, index:any) => i.index = event.first + index + 1)
        this.tableData = res.films
      })  
    }
  }



















  countries = [
    { name: 'Россия', code: 'RUS'},
    { name: 'Америка', code: 'ENG'},
    { name: 'Германия', code: 'GER'},
    { name: 'Германия', code: 'GER'},
    { name: 'Германия', code: 'GER'},
    { name: 'Германия', code: 'GER'},
    { name: 'Германия', code: 'GER'},

  ]
}
