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
    {}
  ]
  cols = [
    { header: ''},
    { header: 'Название'},
    { header: 'Описание'},
    { header: 'Жанр'},
    { header: 'Рейтинг'},
  ]
}
