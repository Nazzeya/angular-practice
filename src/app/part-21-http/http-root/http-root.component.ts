import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-http-root',
  templateUrl: './http-root.component.html',
  styleUrls: ['./http-root.component.css']
})
export class HttpRootComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    this.dataService.getData().subscribe((res) => {
      console.log(res);
    })
  }

}
