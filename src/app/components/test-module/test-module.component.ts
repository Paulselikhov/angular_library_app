import { Component, ViewChild } from '@angular/core';
import { FilmsService } from '../services/films.service';
import { pageCalc, throttle } from 'src/app/common/utils';
import { LazyLoadEvent } from 'primeng/api';
import { Table } from 'primeng/table';
import { Router } from '@angular/router';
import { IFilm, IFilms, ITopFilms } from '../model/films.model';
import { Subscription, interval, map, scan, take } from 'rxjs';

@Component({
  selector: 'app-test-module',
  templateUrl: './test-module.component.html',
  styleUrls: ['./test-module.component.scss', '../../app.component.scss'],
  //providers: [FilmsService],
})
export class TestModuleComponent {
  constructor(
    private filmsService: FilmsService,
    private router: Router,
  ) {
  }
    private subscriptions: Subscription[] = [];
    myArray:any = []
    rxJs(){
      interval(500) // 0,5 секунды
      .pipe(
        take(10), // остановится на 9 
      ).subscribe( res => {
        console.log(res)
      }, (error) => {}, () => alert('rxJs закончил работу!') )
    }

    addListener(){
      document.addEventListener( 'mousemove', this.consoleLog)
      //this.filmsService.updateValue()
    }
    removeListener(){
      document.removeEventListener('mousemove', this.consoleLog)
    }
    consoleLog(){
      console.log('mousemove')
    }

    removeSubscribtions(){
      this.subscriptions.forEach((s) => {
        console.log(`Подписка:${s} удалена!`)
        s.unsubscribe()
      })
    }

    addSubscribtion(){
      //this.subscriptions.push()
    }

    
  }
