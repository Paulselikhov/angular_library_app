import { Component } from '@angular/core';
import { FilmsService } from '../services/films.service';
import { pageCalc } from 'src/app/common/virtualScrollerUtils';
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  public first: number = 1
  constructor(private filmsService: FilmsService) {}

  test(){
    
  }

  test2(event:LazyLoadEvent){
    const {page} = pageCalc(event.first!, event.rows!);
    this.filmsService.getTop250Films(page).subscribe( (res) => {
      this.films = res.films
    })  
  }

  films = [
    { posterUrlPreview: '5', nameRu: 'Россия', countries: [], code: 'RUS', genres: [{"genre": "фантастика"}], rating: '3', ratingVoteCount: '435345'},
    { posterUrlPreview: '5', nameRu: 'Россия', countries: [], code: 'RUS', genres: [{"genre": "фантастика"}], rating: '3', ratingVoteCount: '435345'},
    { posterUrlPreview: '5', nameRu: 'Россия', countries: [], code: 'RUS', genres: [{"genre": "фантастика"}], rating: '3', ratingVoteCount: '435345'},

    { posterUrlPreview: '5', nameRu: 'Россия', countries: [], code: 'RUS', genres: [{"genre": "фантастика"}], rating: '3', ratingVoteCount: '435345'},
    { posterUrlPreview: '5', nameRu: 'Россия', countries: [], code: 'RUS', genres: [{"genre": "фантастика"}], rating: '3', ratingVoteCount: '435345'},
    { posterUrlPreview: '5', nameRu: 'Россия', countries: [], code: 'RUS', genres: [{"genre": "фантастика"}], rating: '3', ratingVoteCount: '435345'},

    { posterUrlPreview: '5', nameRu: 'Россия', countries: [], code: 'RUS', genres: [{"genre": "фантастика"}], rating: '3', ratingVoteCount: '435345'},
    { posterUrlPreview: '5', nameRu: 'Россия', countries: [], code: 'RUS', genres: [{"genre": "фантастика"}], rating: '3', ratingVoteCount: '435345'},
    { posterUrlPreview: '5', nameRu: 'Россия', countries: [], code: 'RUS', genres: [{"genre": "фантастика"}], rating: '3', ratingVoteCount: '435345'},

    { posterUrlPreview: '5', nameRu: 'Россия', countries: [], code: 'RUS', genres: [{"genre": "фантастика"}], rating: '3', ratingVoteCount: '435345'},
    { posterUrlPreview: '5', nameRu: 'Россия', countries: [], code: 'RUS', genres: [{"genre": "фантастика"}], rating: '3', ratingVoteCount: '435345'},

    { posterUrlPreview: '5', nameRu: 'Россия', countries: [], code: 'RUS', genres: [{"genre": "фантастика"}], rating: '3', ratingVoteCount: '435345'},
    { posterUrlPreview: '5', nameRu: 'Россия', countries: [], code: 'RUS', genres: [{"genre": "фантастика"}], rating: '3', ratingVoteCount: '435345'},

    { posterUrlPreview: '5', nameRu: 'Россия', countries: [], code: 'RUS', genres: [{"genre": "фантастика"}], rating: '3', ratingVoteCount: '435345'},
  ]
  cols = [
    { header: 'Постер'},
    { header: 'Название'},
    //{ header: 'Английское'},
    { header: 'Страна'},
    { header: 'Год'},
    { header: 'Жанр'},
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
