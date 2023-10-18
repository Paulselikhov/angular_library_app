import { Component, ViewChild } from '@angular/core';
@Component({
  selector: 'app-test-module',
  template: `<app-test-module2 [name]='name'></app-test-module2>`,
  styleUrls: ['./test-module.component.scss', '../../app.component.scss'],
  //providers: [FilmsService],
})
export class TestModuleComponent {
  public name = ''
  constructor() {}
  }
