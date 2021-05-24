import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import Building from '../../interfaces/building';

@Component({
  selector: 'app-info-building',
  templateUrl: './info-building.component.html',
  styleUrls: ['./info-building.component.scss']
})
export class InfoBuildingComponent implements OnInit {

  id:string|null = null;
  building!: Building;
  display = false;

  constructor( private ApiService: ApiService, private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.getBuilding();
  }

  getBuilding(): void {
    console.log(this.id);
    this.ApiService.getBuilding(this.id)
    .subscribe(result => {
      this.building = result;
      this.display = true;
    });
  }

}
