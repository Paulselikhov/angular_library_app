import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, ViewChild } from '@angular/core';
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
    private changedetector: ChangeDetectorRef,
  ) {
    this.count = 1 //ChangeDetection сработает 

    setTimeout(() => this.count = 5, 0); //ChangeDetection не сработает

    //setInterval(() => this.count = 5, 100); //ChangeDetection не сработает

    Promise.resolve().then(() => this.count = 5);  //ChangeDetection не сработает

    this.filmsService.getFilmById(1000).subscribe(res => {
      this.count = 10 //ChangeDetection не сработает
      this.changedetector.detectChanges()
    })

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
