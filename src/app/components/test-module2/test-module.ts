import { NgModule } from "@angular/core";
import { TestModule2Component } from "./test-module.component";
import { FilmsService } from "../services/films.service";

@NgModule({
    declarations: [
        TestModule2Component,
    ],
    imports: [],
    providers: [FilmsService],
  })
  export class TestModule2 { }