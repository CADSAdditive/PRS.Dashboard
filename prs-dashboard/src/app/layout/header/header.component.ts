import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentDate;
  currentTime;

  constructor() { }

  ngOnInit() {
    this.currentDate = moment().format('dd. DD MMM YY');
    this.currentTime = moment().format('hh:mm:ss');
  }

}
