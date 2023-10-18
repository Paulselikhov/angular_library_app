import { NgModule } from "@angular/core";
import { TestModuleComponent } from "./test-module.component";
import { FilmsService } from "../services/films.service";
import { TestModule2 } from "../test-module2/test-module";

@NgModule({
    declarations: [
        TestModuleComponent,
    ],
    imports: [
        TestModule2
    ],
    providers: [FilmsService],
    exports: [TestModuleComponent]
  })
  export class TestModule { }