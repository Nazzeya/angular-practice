import { Component, OnInit } from '@angular/core';

@Component({ //здесь показаны класс binding
  selector: 'app-class-binding-root',
  templateUrl: './class-binding-root.component.html',
  styleUrls: ['./class-binding-root.component.css']
})
export class ClassBindingRootComponent {
  onSale = true//onSale = true, проверь в консоли как это работает
}
