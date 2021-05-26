import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import City from '../../interfaces/city';
import Building from '../../interfaces/building';

import { ApiService } from '../../services/api.service';
import { PageEvent } from '@angular/material/paginator';
import { Sort} from '@angular/material/sort';
import { Label } from 'ng2-charts';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  paginationPageSize = 10;
  rowModelType = 'viewport';
  columnDefs: Object[];
  max!: number;
  dataSource!: Observable<Building[]>;

  // Données pour un graphique en donut selon les types d'appartements'
  dataDoughNutChart!: [number[]];
  labelsDoughNutChart!: Label[];

  // Données pour un graphique en bâtons
  dataLineBarChart: object[] = [];
  labelsLineBarChart: Label[] = [];


  constructor( private ApiService: ApiService) {
    this.columnDefs = [
      { field: 'superficie', headerName: 'Superficie', sortable: true},
      { field: 'energie', headerName: 'Énergie', sortable: true},
      { field: 'type', headerName: 'Type', sortable: true},
      { field: 'nbDePieces', headerName: 'Nombre de pièces', sortable: true},
      { headerName: 'Ville', valueGetter: cityNameGetter, sortable: true},
      { headerName: 'Code Postal', valueGetter: cpNameGetter, sortable: true},
      { headerName: 'Propriétaire', valueGetter: ownerNameGetter, sortable: true},
    ];
  }

  ngOnInit(): void {
    this.dataSource = this.ApiService.getBuildings();
  }

}

function cityNameGetter(param: any): string {
  console.log(param);
  return param.data.ville.nom
}

function cpNameGetter(param: any): string {
  return param.data.ville.codePostal
}

function ownerNameGetter(param: any): string {
  return param.data.proprietaire.denomination
}
