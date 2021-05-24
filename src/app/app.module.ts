import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { AngularMaterialModule } from './angular-material.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './building/dashboard/dashboard.component';
import { AddBuildingComponent } from './building/add-building/add-building.component';
import { EditBuildingComponent } from './building/edit-building/edit-building.component';
import { InfoBuildingComponent } from './building/info-building/info-building.component';
import { BuildingFormComponent } from './components/building-form/building-form.component';
import { LoginComponent } from './login/login.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';

import { DoughnutChartComponent } from './components/doughnut-chart/doughnut-chart.component';
import { LinebarChartComponent } from './components/linebar-chart/linebar-chart.component';
import { ChartsModule } from 'ng2-charts';





@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddBuildingComponent,
    EditBuildingComponent,
    InfoBuildingComponent,
    LoginComponent,
    DoughnutChartComponent,
    LinebarChartComponent,
    BuildingFormComponent,
    NavMenuComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    ChartsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
