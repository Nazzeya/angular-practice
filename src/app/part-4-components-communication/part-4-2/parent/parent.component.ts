import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-2',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent2 implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  receiveMessage(msg: string) {
    alert(msg);
  }

}
