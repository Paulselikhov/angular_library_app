import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <ng-content></ng-content>
  <!-- <app-test-module [nameOjb]="titleOjb"></app-test-module> -->
  <button (click)="onClick()">Trigger change detection</button>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  titleOjb: {name: string} = {name: 'popa'};

  onClick() {
    this.titleOjb.name = 'zhopa'
  }
}
