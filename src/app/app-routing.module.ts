import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

import { ContractsComponent } from './components/contracts/contracts.component';
import { SearchComponent } from './components/search/search.component';

import { ContractoptionsComponent } from './components/contracts/contractoptions/contractoptions.component';
import { AddcontractComponent } from './components/contracts/addcontract/addcontract.component';
import { SearchcontractComponent } from './components/contracts/searchcontract/searchcontract.component';


const routes: Routes = [  {path: '',redirectTo:'home',pathMatch:'full'},
                          {path: 'home',component :HomeComponent},
                          {path: 'about',component :AboutComponent},
                          {path: 'contact',component :ContactComponent},
                          {path: 'contracts', component:ContractsComponent , children: [
                            {path: '',redirectTo:'contractoptions',pathMatch:'full'},
                            {path: 'contractoptions',  component: ContractoptionsComponent},
                             {path: 'addcontract',  component: AddcontractComponent},
                              {path:'searchcontract', component: SearchcontractComponent}]},
                             {path: 'search', component:SearchComponent}];


@NgModule({
  imports: [CommonModule,
            RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
