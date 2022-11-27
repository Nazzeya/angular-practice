import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-root',
  templateUrl: './directives-root.component.html',
  styleUrls: ['./directives-root.component.css']
})
export class DirectivesRootComponent implements OnInit {

  isSpecial = true;
  currentClasses = {};
  currentStyle ={};
  name = 'bob'

  ngOnInit(): void {
    this.setCurrentClasses();
    this.setCurrentStyle();
  }

  setCurrentClasses(){
    this.currentClasses = {
      saveable: true, 
      modified: false,
      special: true
    }
  }

  setCurrentStyle(){
    this.currentStyle = {
      'font-style': 'italic',
      'font-weight': 'bold'
    }
  }

}
