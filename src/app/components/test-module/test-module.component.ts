import { ChangeDetectionStrategy, Component, Input, ViewChild } from '@angular/core';
import { FilmsService } from '../services/films.service';
import { pageCalc, throttle } from 'src/app/common/utils';
import { LazyLoadEvent } from 'primeng/api';
import { Table } from 'primeng/table';
import { Router } from '@angular/router';
import { IFilm, IFilms, ITopFilms } from '../model/films.model';

@Component({
  selector: 'app-test-module',
  template: `
    <h1>Hello {{nameOjb.name}}!</h1>
    {{runChangeDetection}}
    <button (click)="test()">Триггер 2</button>
    <span>Коунт = {{count}}</span>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./test-module.component.scss', '../../app.component.scss'],
  //providers: [FilmsService],
})
export class TestModuleComponent {
  count = 0
  constructor(
    private filmsService: FilmsService,
    private router: Router,
  ) {
    this.count = 1
    setTimeout(() => this.count = 5, 0);

    //setInterval(() => this.count = 5, 100);

    Promise.resolve().then(() => this.count = 5); 

    this.filmsService.getFilmById(1).subscribe(res => {
      this.count = 10
    })

    // this.http.get('https://count.com').subscribe(res => {
    //   this.count = res;
    // });
  }
  
    @Input() nameOjb:{name:string} = {name: ''};

    get runChangeDetection() {
      console.log('Checking the view');
      return true;
    }

    test(){
      setTimeout(() => this.count = 6, 0);
    }
  }
