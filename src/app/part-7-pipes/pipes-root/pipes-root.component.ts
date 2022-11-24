import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-root',
  templateUrl: './pipes-root.component.html',
  styleUrls: ['./pipes-root.component.css']
})
export class PipesRootComponent {
  todaysDate = new Date();
}
