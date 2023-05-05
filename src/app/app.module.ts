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
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TitleComponent } from './components/shared/title/title.component';
import { OperationsListComponent } from './components/financial-assets/assets-list/operations-list/operations-list.component';
import { BuySellPipe } from './components/shared/pipe/buysell.pipe';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { LoginComponent } from './features/login/login.component';
import { HomeComponent } from './features/home/home.component';
import { EchartsComponent } from './features/charts/echarts/echarts.component';
import { LightweightComponent } from './features/charts/lightweight/lightweight.component';


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
    AddAssetFormComponent,
    TitleComponent,
    OperationsListComponent,
    BuySellPipe,
    LoginComponent,
    HomeComponent,
    EchartsComponent,
    LightweightComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    MatRadioModule,
    MatSelectModule,
    MatInputModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
