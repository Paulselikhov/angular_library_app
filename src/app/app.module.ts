import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestModule } from './components/test-module/test-module';
import { TestModuleComponent } from './components/test-module/test-module.component';
import { FilmsService } from './components/services/films.service';
import { TestModule2 } from './components/test-module2/test-module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TestModule,
    TestModule2,
  ],
  providers: [FilmsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
