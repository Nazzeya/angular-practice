import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
  @Output() deleteRequest = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  delete() {
    this.deleteRequest.emit('item name');
  }

}
