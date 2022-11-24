import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-statements-root',
  templateUrl: './template-statements-root.component.html',
  styleUrls: ['./template-statements-root.component.css']
})
export class TemplateStatementsRootComponent {
  showText = false;

  toggleText(event: any): void {
    this.showText = !this.showText;
    console.log(event);
  }
}
