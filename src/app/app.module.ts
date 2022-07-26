import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { FinancialAssetsComponent } from './components/financial-assets/financial-assets.component';
import { FiltersComponent } from './components/financial-assets/filters/filters.component';
import { AssetsListComponent } from './components/financial-assets/assets-list/assets-list.component';
import { AssetsItemComponent } from './components/financial-assets/assets-list/assets-item/assets-item.component';
import { AddAssetFormComponent } from './components/financial-assets/assets-list/addAsset-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    FinancialAssetsComponent,
    FiltersComponent,
    AssetsListComponent,
    AssetsItemComponent,
    AddAssetFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
