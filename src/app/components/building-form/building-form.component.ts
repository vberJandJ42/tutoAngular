import { Component, Input, OnInit } from '@angular/core';
import Building from 'src/app/interfaces/building';

@Component({
  selector: 'app-building-form',
  templateUrl: './building-form.component.html'
})
export class BuildingFormComponent implements OnInit {

  @Input() public building?: Building;
  addFrom = false;

  constructor() { }

  ngOnInit(): void {
    if (this.building === undefined) {
      this.addFrom = true;
    }
  }

  addBuilding(): void {

  }

  updateBuilding(): void {

  }
}
