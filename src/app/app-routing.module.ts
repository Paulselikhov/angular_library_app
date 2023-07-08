import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibraryComponent } from './components/library/library.component';
import { BookComponent } from './components/book/book.component';

const routes: Routes = [
  {path: '', component: LibraryComponent},
  {path: 'book/:id', component: BookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
