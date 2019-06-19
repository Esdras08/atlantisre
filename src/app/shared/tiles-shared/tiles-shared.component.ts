import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tiles-shared',
  templateUrl: './tiles-shared.component.html',
  styleUrls: ['./tiles-shared.component.scss']
})
export class TilesSharedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isHoverMe(id: any): boolean {
    return id === 'd';
  }
}
