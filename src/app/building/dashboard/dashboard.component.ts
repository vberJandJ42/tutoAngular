import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import BTypeData from '../../interfaces/bTypeData';
import Building from '../../interfaces/building';

import { ApiService } from '../../services/api.service';
import { Label } from 'ng2-charts';

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
    this.calculateChartData();
  }

  calculateChartData(): void {
    const dataType: BTypeData = {};
        const surfByType: BTypeData = {};
        for (const item of Object.values(this.dataSource)) {
          if (dataType[item.type] == undefined) {
            dataType[item.type] = 0;
          } else {
            dataType[item.type]++;
          }

          if (surfByType[item.type] == undefined) {
            surfByType[item.type] = 0;
          } else {
            surfByType[item.type] += item.superficie;
          }
        }
        const dataSet: object[] = [];

        Object.keys(surfByType).forEach(key => {
          const moy = Math.round((surfByType[key] / dataType[key])*100)/100;
          dataSet.push({data: moy, label: key});
          this.labelsLineBarChart.push(key);
        });

        this.dataLineBarChart = dataSet;

        this.dataDoughNutChart = [Object.values(dataType)];
        this.labelsDoughNutChart = Object.keys(dataType);
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
