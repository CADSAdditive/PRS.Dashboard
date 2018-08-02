import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentDate;
  currentTime;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.currentDate = new Date().toDateString();
    this.currentTime = new Date().toLocaleTimeString();
  }

}
