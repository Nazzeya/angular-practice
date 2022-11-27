import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-t-v-root',
  templateUrl: './t-v-root.component.html',
  styleUrls: ['./t-v-root.component.css']
})
export class TVRootComponent {
  callPhone(phone: string) {
    console.log(phone);
  }
}
