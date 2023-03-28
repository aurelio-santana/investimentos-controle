import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAssetFormComponent } from './components/financial-assets/assets-list/addAsset-form.component';
import { AssetsListComponent } from './components/financial-assets/assets-list/assets-list.component';
import { OperationsListComponent } from './components/financial-assets/assets-list/operations-list/operations-list.component';
import { HomeComponent } from './features/home/home.component';
import { LoginComponent } from './features/login/login.component';

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: AddAssetFormComponent},

  { path: 'operations/stock', component: OperationsListComponent },
  { path: 'assets', component: AssetsListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'temphome', component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
