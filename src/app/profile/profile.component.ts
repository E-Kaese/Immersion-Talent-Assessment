import { MainService } from './../services/main.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  data = {
    'id': 0,
    'first_name': '',
    'last_name': '',
    'email': '',
    'gender': '',
    'Username': '',
    'Department': '',
    'Avatar': ''
  };

  constructor(protected mainService: MainService) {
    this.data = mainService.employees[mainService.activeUserId - 1];
  }

  ngOnInit() {
  }

}
