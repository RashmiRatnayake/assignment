import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addcontract',
  templateUrl: './addcontract.component.html',
  styleUrls: ['./addcontract.component.css']
})
export class AddcontractComponent implements OnInit {

  hotelName:String;


  constructor() { }

  ngOnInit() {
  }

   newContractData(){
      const newcontract={
            hotelName:this.hotelName,


      };
      console.log(newcontract);


    }

}
