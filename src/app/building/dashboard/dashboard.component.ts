import { Component, OnInit } from '@angular/core';

import Building from '../../interfaces/building';
import BTypeData from '../../interfaces/bTypeData';
import Query from '../../interfaces/query';
import { ApiService } from '../../services/api.service';

import { PageEvent } from '@angular/material/paginator';
import { Sort} from '@angular/material/sort';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  display = false;
  max!:number;
  dataSource!: Building[];
  asc = true;
  sortBy = 'Superficie';
  currentPage = 0;
  itemsPerPage = 5;
  columnsToDisplay = ['superficie', 'energie', 'type', 'nbDePieces', 'ville', 'cp', 'owner', 'edit', 'detail'];
  /*columnDefs = [
    { field: 'superficie'},
    { field: 'energie'},
    { field: 'type'},
    { field: 'nbDePieces'},
    { field: 'ville'},
    { field: 'cp'},
    { field: 'owner'},
    { field: 'edit'},
    { field: 'detail'}
  ];*/


  // Données pour un graphique en donut selon les types d'appartements'
  dataDoughNutChart!: [number[]];
  labelsDoughNutChart!: Label[];

  // Données pour un graphique en bâtons
  dataLineBarChart: object[] = [];
  labelsLineBarChart: Label[] = [];


  constructor( private ApiService: ApiService) {}

  ngOnInit(): void {
    this.countBuildings();
    this.getBuildings();
  }

  get query(): Query {
    return {
      asc : this.asc,
      sortBy: this.sortBy,
      pageSize: this.itemsPerPage,
      currentIndex: this.currentPage * this.itemsPerPage
    }
  }

  countBuildings(): void {
    this.ApiService.countBuildings()
    .subscribe(result => {
      this.max = result;
    });
  }

  getBuildings(): void {
    console.log(this.query)
    this.ApiService.getBuildings(this.query)
      .subscribe(result => {
        this.dataSource = result;
        if (this.display === false) {
          this.display = true;
        }
        // Calcul des données pour les graphiques
        /*const dataType: BTypeData = {};
        const surfByType: BTypeData = {};
        for (const item of Object.values(result)) {
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

        this.display = true;*/
      })
  }

  /*calculateDataToDisplay(): void {
    const begin = this.itemsPerPage * (this.currentPage);
    const end = begin + this.itemsPerPage;
    this.dataSource = [];
    let i = begin;
    while (i < end) {
      const toInsert = (this.buildings[i] !== undefined) ? this.buildings[i] : {
        superficie: 0,
        energie: '',
        type: '',
        nbDePieces: 0,
        villeId: 0,
        ville: {
          nom: '',
          codePostal: 0
        }
      };
      this.dataSource.push(toInsert);
      i++;
    }
  }*/

  onChangePage(pe: PageEvent): void  {
    if (pe.pageIndex >= 0) {
      this.currentPage = pe.pageIndex;
      this.getBuildings();
    }
  }

  buildingSort(sort: Sort): void  {
    this.sortBy = sort.active;
    this.asc = (sort.direction === 'asc');
    this.getBuildings();
  }
}
