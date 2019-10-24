import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import {MaterialImportsAndExportsModule} from './material-imports-and-exports/material-imports-and-exports.module';
import { HomeComponent } from './components/home/home.component';
import { ContractsComponent } from './components/contracts/contracts.component';
import { SearchComponent } from './components/search/search.component';
import { AddcontractComponent } from './components/contracts/addcontract/addcontract.component';
import { ContractoptionsComponent } from './components/contracts/contractoptions/contractoptions.component';
import { SearchcontractComponent } from './components/contracts/searchcontract/searchcontract.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ResulthotellistComponent } from './components/search/resulthotellist/resulthotellist.component';
import { ResulthotelComponent } from './components/search/resulthotel/resulthotel.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContractsComponent,
    SearchComponent,
    AddcontractComponent,
    ContractoptionsComponent,
    SearchcontractComponent,
    AboutComponent,
    ContactComponent,
    ResulthotellistComponent,
    ResulthotelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialImportsAndExportsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
