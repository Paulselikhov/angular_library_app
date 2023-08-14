import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  value = null
  sortField = 'name'
  sortOrder = 1
  products = [
    { foto: '5', name: 'Россия', code: 'RUS', test: '3', test2: '3'}
  ]
  cols = [
    { header: '', field: 0},
    { header: 'Название', field: 1},
    { header: 'Описание', field: 2},
    { header: 'Жанр', field: 3},
    { header: 'Рейтинг', field: 4},
  ]
  countries = [
    { name: 'Россия', code: 'RUS'},
    { name: 'Америка', code: 'ENG'},
    { name: 'Германия', code: 'GER'},
  ]
  selectedCountry = null
}
