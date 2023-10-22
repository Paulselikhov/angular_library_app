import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { TestModule2Component } from '../test-module2/test-module.component';
@Component({
  selector: 'app-test-module',
  template: `
  <button (click)="child.test()">Кнопка родителя {{child.name}}</button>

  <app-test-module2 [name]='name' #child></app-test-module2>
  `,
  styleUrls: ['./test-module.component.scss', '../../app.component.scss'],
  //providers: [FilmsService],
})
export class TestModuleComponent implements AfterViewInit {
  @ViewChild(TestModule2Component)
  
  private timerComponent!: TestModule2Component;

  public name = ''
  constructor() {
    
  }

  ngAfterViewInit(){
    console.log(this.timerComponent.test2())
  }
  }
