import { Component, ViewChild } from '@angular/core';
@Component({
  selector: 'app-test-module',
  template: `
  <button (click)="child.test()">Кнопка родителя {{child.name}}</button>

  <app-test-module2 [name]='name' #child></app-test-module2>
  `,
  styleUrls: ['./test-module.component.scss', '../../app.component.scss'],
  //providers: [FilmsService],
})
export class TestModuleComponent {
  public name = ''
  constructor() {}
  }
