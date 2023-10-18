import { NgModule } from "@angular/core";
import { TestModule2Component } from "./test-module.component";


@NgModule({
    declarations: [
        TestModule2Component,
    ],
    imports: [],
    providers: [],
    exports: [TestModule2Component]
  })
  export class TestModule2 { }