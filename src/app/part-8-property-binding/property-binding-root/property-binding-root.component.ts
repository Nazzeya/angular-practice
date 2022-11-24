import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding-root',
  templateUrl: './property-binding-root.component.html',
  styleUrls: ['./property-binding-root.component.css']
})
export class PropertyBindingRootComponent {
  isUnchanged = true
  itemImageUrl = '../assets/phone.jpg'
}
