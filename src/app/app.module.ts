import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestModule } from './components/test-module/test-module';
import { TestModule2 } from './components/test-module2/test-module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  exports: [

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TestModule,
    TestModule2
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
