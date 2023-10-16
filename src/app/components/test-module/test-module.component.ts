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
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./test-module.component.scss', '../../app.component.scss'],
  //providers: [FilmsService],
})
export class TestModuleComponent {
  constructor(
    private filmsService: FilmsService,
    private router: Router,
  ) {}
  
    @Input() nameOjb:{name:string} = {name: ''};

    get runChangeDetection() {
      console.log('Checking the view');
      return true;
    }
  }
