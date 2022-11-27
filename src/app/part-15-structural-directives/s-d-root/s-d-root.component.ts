import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-s-d-root',
  template: `
  <div *ngIf="isActive">Active</div>
  <p>
  <div *ngFor="let item of items; let i = index">{{i}} - {{item.name}}</div>
  <p>
  <div [ngSwitch]="item1.name"> 
  <div *ngSwitchCase="'Nazeya'">Hi sister</div>
  <div *ngSwitchCase="'Gulzira'">Hi mom</div>
  <div *ngSwitchDefault>Hi friend</div>
  </div>
  `,
  styleUrls: ['./s-d-root.component.css']
})
export class SDRootComponent implements OnInit {

  isActive = true;

  items =[
    { name: 'Bob' },
    { name: 'John' },
    { name: 'Monica' },
  ]

  item1 = { name: 'Nazeya'};

  ngOnInit(): void {
  }

}
