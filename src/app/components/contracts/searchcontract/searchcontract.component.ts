import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchcontract',
  templateUrl: './searchcontract.component.html',
  styleUrls: ['./searchcontract.component.css']
})
export class SearchcontractComponent implements OnInit {

  constructor() { }

  hotel:any;

  minDate = new Date();
  maxDate = new Date(2020, 11, 31); //date starts with month 0 = january. so this is december 10th

  ngOnInit() {
  }

  newSearchContractData(){
        const newsearchcontract={
              hotel:this.hotel
        };
        console.log(newsearchcontract);


      }

}
