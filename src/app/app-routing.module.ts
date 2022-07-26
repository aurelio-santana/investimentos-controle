import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAssetFormComponent } from './components/financial-assets/assets-list/addAsset-form.component';
import { AssetsListComponent } from './components/financial-assets/assets-list/assets-list.component';

const routes: Routes = [
  {path : 'add', component : AddAssetFormComponent},
  {path : 'assets', component : AssetsListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
