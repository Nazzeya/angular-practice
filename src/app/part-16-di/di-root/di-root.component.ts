import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'app-di-root',
  templateUrl: './di-root.component.html',
  styleUrls: ['./di-root.component.css']
})
export class DiRootComponent implements OnInit {

  constructor(
    private logService: LogService,
    private renderer: Renderer2,
    private host: ElementRef) { }

  ngOnInit(): void {
    this.logService.logMessage('Hello Naziya');
    this.renderer.setStyle(this.host.nativeElement, 'color', 'blue')
  }

}
