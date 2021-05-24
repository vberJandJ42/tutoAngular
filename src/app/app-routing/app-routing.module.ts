import { NgModule } from '@angular/core';
import { RouterModule, Routes,  } from '@angular/router';
import { AddBuildingComponent } from '../building/add-building/add-building.component';
import { DashboardComponent } from '../building/dashboard/dashboard.component';
import { EditBuildingComponent } from '../building/edit-building/edit-building.component';
import { InfoBuildingComponent } from '../building/info-building/info-building.component';
import { LoginComponent } from '../login/login.component';

const ROUTES: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'building', children: [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'add', component: AddBuildingComponent },
    { path: 'info/:id', component: InfoBuildingComponent },
    { path: 'edit/:id', component: EditBuildingComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
