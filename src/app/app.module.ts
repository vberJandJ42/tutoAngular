import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { AngularMaterialModule } from './angular-material.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { BuildingModule } from './building/building.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavMenuComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    BuildingModule,
    AngularMaterialModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
