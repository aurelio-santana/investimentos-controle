import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AddAssetFormComponent } from "./addAsset-form.component";
import { AssetsListComponent } from "./assets-list.component";



@NgModule({
  declarations: [

  ],
  imports: [
    RouterModule.forChild([
      {
        path: '', redirectTo: 'home', pathMatch: 'full'
      },
      {
        path: 'home', component: AddAssetFormComponent
      },
      {
        path: 'assets', component: AssetsListComponent
      },
      /* {
        path: 'operations/stock', component: OperationsListComponent
      }, */
      /* {
        path: '**', component: Error404Component
      }, */


    ])
  ]
})

export class AssetsModule {}
