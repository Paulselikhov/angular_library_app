import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  titleOjb: {name: string} = {name: 'popa'};

  onClick() {
    this.titleOjb.name = 'zhopa'
  }
}
