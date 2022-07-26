import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AssetsListComponent } from "./assets-list.component";

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      {
        path: 'assets', component: AssetsListComponent
      }
    ])
  ]
})

export class AssetsModule {}
