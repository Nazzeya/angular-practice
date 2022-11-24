import { Component } from '@angular/core';

@Component({
    selector: 'app-text-interpolation',
    templateUrl: './text-interpolation.html',
    styles: [`
    h1 {
        color: blue;
    }`]
})
export class TextInterpolationComponent {
    title = "Hello World!";

    getMin(a: number, b: number){
        if(a<b){
            return a;
        }
        return b;
    }
}
