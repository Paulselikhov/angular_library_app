import { NgModule } from "@angular/core";
import { TestModuleComponent } from "./test-module.component";
import { FilmsService } from "../services/films.service";

@NgModule({
    declarations: [
        TestModuleComponent,
    ],
    imports: [],
    providers: [],
    exports: [TestModuleComponent]
  })
  export class TestModule { }