import { MainService } from './../services/main.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {

  constructor(protected mainService: MainService, protected router: Router) { }

  ngOnInit() {
  }

  view(id) {
    this.mainService.activeUserId = id;
    this.router.navigate(['/profile']);
  }

}
