import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-2',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent2 implements OnInit {
  @Output() messageEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  sendMessage(){
    this.messageEvent.emit('Hello from child');
  }

}
