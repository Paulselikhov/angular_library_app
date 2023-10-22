import { Component, ViewChild } from '@angular/core';
import { FilmsService } from '../services/films.service';
import { pageCalc, throttle } from 'src/app/common/utils';
import { LazyLoadEvent } from 'primeng/api';
import { Table } from 'primeng/table';
import { Router } from '@angular/router';
import { IFilm, IFilms, ITopFilms } from '../model/films.model';
import { Subscription, interval, map, scan, take, of, from, Observable, fromEvent } from 'rxjs';

@Component({
  selector: 'app-test-module',
  templateUrl: './test-module.component.html',
  styleUrls: ['./test-module.component.scss', '../../app.component.scss'],
  //providers: [FilmsService],
})
export class TestModuleComponent {

  public fromEventSubscribtion: any
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


    //СОЗДАНИЕ СТРИМА
    createStream(){
      // const stream$ = of(1, 2, 3) // Знак доллара указывает на то, что переменная - реактивная
      // stream$.subscribe( val => {
      //   console.log(val)
      // })


      // const stream2$ = from(['value1', 'value2']) // То-же самое, что и of, только передаём аргументов - массив
      // stream2$.pipe( 
      //   scan( (acc, v:any) => acc.concat(v), [])) // Метод arr.concat создаёт новый массив, в который копирует данные из других массивов и дополнительные значения
      // .subscribe( val => {
      //   console.log(val)
      // })


      // const stream3$ = new Observable( observer => {
      //   observer.next('First value')
      //   setTimeout( () => observer.next('After 1000ms'), 1000)
      //   setTimeout( () => observer.error('Ошибка обработана в подписке!'), 1000)
      //   setTimeout( () => observer.next('After 1000ms'), 2000)
      //   setTimeout( () => observer.complete(), 3000)
      // })
      //stream3$.subscribe( val => console.log(val), (error) => console.log(error), () => console.log('complete') )

      //Альтернативная запись той, что выше
      // stream3$.subscribe({
      //   next(val) {
      //     console.log(val)
      //   },
      //   error(err){
      //     console.log(err)
      //   },
      //   complete(){
      //     console.log('complete')
      //   }
      // })


      
    }

    addRxJsListener(){
      //Метод fromEvent
      this.fromEventSubscribtion = fromEvent(document,'mousemove').subscribe( event => console.log(event))
    }
    removeRxJsListener(){
      this.fromEventSubscribtion.unsubscribe()
    }

    
  }
