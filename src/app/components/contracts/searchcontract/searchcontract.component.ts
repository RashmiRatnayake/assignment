import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchcontract',
  templateUrl: './searchcontract.component.html',
  styleUrls: ['./searchcontract.component.css']
})
export class SearchcontractComponent implements OnInit {

  constructor() { }

  hotelName:any;

  ngOnInit() {
  }

  newSearchContractData(){
        const newsearchcontract={
              hotelName:this.hotelName
        };
        console.log(newsearchcontract);
      }

}
