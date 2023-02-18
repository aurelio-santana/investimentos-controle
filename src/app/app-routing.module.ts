import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAssetFormComponent } from './components/financial-assets/assets-list/addAsset-form.component';
import { AssetsListComponent } from './components/financial-assets/assets-list/assets-list.component';
import { OperationsListComponent } from './components/financial-assets/assets-list/operations-list/operations-list.component';

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: AddAssetFormComponent},

  { path: 'operations/stock', component: OperationsListComponent },
  { path: 'assets', component: AssetsListComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
