import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
    selector: '[appHighlight]'
})

export class HighlightDirective {
    el!: ElementRef;

    @Input() appHighlight = '';
    
    @HostListener('mouseenter') onMouseEnter() {
        this.highlight(this.appHighlight);
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.highlight('');
    }

    constructor(el: ElementRef) {
        el.nativeElement.style.backgroundColor = this.appHighlight;
    }

    private highlight(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
    }
}