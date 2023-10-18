import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestModuleComponent } from './components/test-module/test-module.component';
import { TestModule2Component } from './components/test-module2/test-module.component';
import { TestModule } from './components/test-module/test-module';
import { TestModule2 } from './components/test-module2/test-module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TestModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
