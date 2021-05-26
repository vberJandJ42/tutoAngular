import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddBuildingComponent } from './add-building/add-building.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditBuildingComponent } from './edit-building/edit-building.component';
import { InfoBuildingComponent } from './info-building/info-building.component';
import { AgGridModule } from 'ag-grid-angular';
import  {ChartsModule } from 'ng2-charts';
import { AngularMaterialModule } from '../angular-material.module';
import { LinebarChartComponent } from '../components/linebar-chart/linebar-chart.component';
import { DoughnutChartComponent } from '../components/doughnut-chart/doughnut-chart.component';

@NgModule({
  declarations: [
    AddBuildingComponent,
    DashboardComponent,
    EditBuildingComponent,
    InfoBuildingComponent,
    LinebarChartComponent,
    DoughnutChartComponent
  ],
  imports: [
    CommonModule,
    AgGridModule.withComponents([]),
    ChartsModule,
    AngularMaterialModule
  ]
})
export class BuildingModule { }
