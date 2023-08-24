import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsMainComponent } from './components/films-main/films-main.component';

const routes: Routes = [
  {path: '', component: FilmsMainComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
