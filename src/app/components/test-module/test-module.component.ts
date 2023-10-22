import { Component, ViewChild } from '@angular/core';
import { FilmsService } from '../services/films.service';
import { pageCalc, throttle } from 'src/app/common/utils';
import { LazyLoadEvent } from 'primeng/api';
import { Table } from 'primeng/table';
import { Router } from '@angular/router';
import { IFilm, IFilms, ITopFilms } from '../model/films.model';

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
  
    rxJs(){
      
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




    test2(){
      this.router.navigate(['test2'])
      
    }

    
  }
