import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-first-routing-component',
  templateUrl: './first-routing-component.component.html',
  styleUrls: ['./first-routing-component.component.css']
})
export class FirstRoutingComponentComponent implements OnInit {

  constructor( private route: ActivatedRoute ) { }

  ngOnInit(): void {
    //alert(this.route.snapshot.paramMap.get('id'));
  }

}
