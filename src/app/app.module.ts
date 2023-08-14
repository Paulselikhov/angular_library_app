import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmComponent } from './components/film/film.component';
import {  MainComponent } from './components/main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataViewModule, DataViewLayoutOptions } from 'primeng/dataview';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ListboxModule } from 'primeng/listbox';

@NgModule({
  declarations: [
    AppComponent,
    FilmComponent,
    MainComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DataViewModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    TableModule,
    ListboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
