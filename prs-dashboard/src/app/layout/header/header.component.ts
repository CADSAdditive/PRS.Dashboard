import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentDate;
  currentTime;

  constructor(private router: Router) { }

  ngOnInit() {
    this.currentDate = moment().format('dd. DD MMM YY');
    this.currentTime = moment().format('hh:mm:ss');
  }

}
