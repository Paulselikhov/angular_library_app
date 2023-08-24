import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmsAboutComponent } from './components/films-about/films-about.component';
import { FilmsMainComponent } from './components/films-main/films-main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataViewModule, DataViewLayoutOptions } from 'primeng/dataview';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ListboxModule } from 'primeng/listbox';
import { TooltipModule } from 'primeng/tooltip';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [
    AppComponent,
    FilmsAboutComponent,
    FilmsMainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TooltipModule,
    DataViewModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    TableModule,
    ListboxModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
