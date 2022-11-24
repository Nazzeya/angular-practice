import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-lifecycle',
    template: '<h1>Hello</h1>',
    styles: [`
    h1 {
        color: blue;
    }`]
})
export class LifecycleComponent implements OnInit, OnDestroy {
    intervalSub: string | number | NodeJS.Timer | undefined;

    ngOnInit(){
        this.intervalSub = setInterval(() => {
            console.log('Hello from ngOnInit');
        }, 1000);
    }

    ngOnDestroy(){
        if(this.intervalSub) {
            clearInterval(this.intervalSub);
        }
    }
}