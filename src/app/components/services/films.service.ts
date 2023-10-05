
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})

export class FilmsService {
    private value = 0

    updateValue(){
        this.value = this.value + 1
        alert(this.value)
    }
}