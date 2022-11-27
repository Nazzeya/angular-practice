import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a-d-root',
  template: `<p [appHighlight]="'red'">Test</p>`,
  styleUrls: ['./a-d-root.component.css']
})
export class ADRootComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
