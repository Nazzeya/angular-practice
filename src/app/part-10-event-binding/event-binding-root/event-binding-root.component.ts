import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding-root',
  templateUrl: './event-binding-root.component.html',
  styleUrls: ['./event-binding-root.component.css']
})
export class EventBindingRootComponent {
  onSave() {
    console.log('click on save')
  }

  deleteItem(item: any) {
    console.log('item')
  }
}
