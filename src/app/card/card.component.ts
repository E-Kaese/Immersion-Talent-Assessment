import { MainService } from './../services/main.service';
import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  imageSrc: string;

  @Input()
  gender: string;

  @Input()
  username: string;

  @Input()
  department: string;

  @Input()
  id: number;

  constructor(private mainService: MainService, private router: Router) { }

  ngOnInit() {
  }

  view() {
    this.mainService.activeUserId = this.id;
    this.router.navigate(['/profile']);
  }

}
