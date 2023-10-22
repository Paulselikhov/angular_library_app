import { Component, Input, ViewChild } from '@angular/core';
import { FilmsService } from '../services/films.service';
import { pageCalc, throttle } from 'src/app/common/utils';
import { LazyLoadEvent } from 'primeng/api';
import { Table } from 'primeng/table';
import { Router } from '@angular/router';
import { IFilm, IFilms, ITopFilms } from '../model/films.model';

@Component({
  selector: 'app-test-module2',
  templateUrl: './test-module.component.html',
  styleUrls: ['./test-module.component.scss', '../../app.component.scss'],
  //providers: [FilmsService],
})
export class TestModule2Component {
  @Input()
    get name(): string {
        return this._name;
    }
    set name(name: string) {
        this._name =
            (name && name.trim()) || '<no name set>';
    }
    private _name = '';

    
  constructor(){
    
  }

  get runChangeDetection() {
    return true;
  }

  test2(){
    return 'viewChild'
  }

  test(){
    alert('Вызвал метод дочернего элемента')
  }
  
}
