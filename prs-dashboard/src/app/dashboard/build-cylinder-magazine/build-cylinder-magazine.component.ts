import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-build-cylinder-magazine',
  templateUrl: './build-cylinder-magazine.component.html',
  styleUrls: ['./build-cylinder-magazine.component.scss']
})
export class BuildCylinderMagazineComponent implements OnInit {

  buildCylinderMagazineObject = [{}, {}, {}, {}, {}, {}];

  constructor() {
  }

  ngOnInit() {
  }

}
