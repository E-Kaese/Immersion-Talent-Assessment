import { MainService } from './../services/main.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  constructor(protected mainService: MainService) { }

  ngOnInit() {
  }

}
