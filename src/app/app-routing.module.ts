import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { FilmsMainComponent } from './components/films-main/films-main.component';
import { TestModuleComponent } from './components/test-module/test-module.component';
import { TestModule2Component } from './components/test-module2/test-module.component';

const routes: Routes = [
  //{path: '', component: FilmsMainComponent},
  {path: 'test', component: TestModuleComponent},
  {path: 'test2', component: TestModule2Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
