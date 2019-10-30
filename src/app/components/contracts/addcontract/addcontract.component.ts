import { Component, OnInit } from '@angular/core';
import {ContractService} from '../../../service/contract/contract.service';

import {DateAdapter, MAT_DATE_FORMATS} from '@angular/material/core';
import { AppDateAdapter, APP_DATE_FORMATS } from '../../../format-datepicker';

import * as moment from 'moment';

@Component({
  selector: 'app-addcontract',
  templateUrl: './addcontract.component.html',
  styleUrls: ['./addcontract.component.css'],
  providers: [
      {provide: DateAdapter, useClass: AppDateAdapter},
      {provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS}
    ]
})
export class AddcontractComponent implements OnInit {

  hotelName:String;
  validFrom:any;
  validTo:any;
  markup:any;
  roomtype1:String;
  description1:String;
  maxadults1:any;
  roomtype2:String;
  description2:String;
  maxadults2:any;
  contractId:String;


  constructor(private contractService:ContractService) { }

  minDate = new Date();
  maxDate = new Date(2020, 11, 31); //date starts with month 0 = january. so this is december 10th

  ngOnInit() {
  }

   newContractData(){

       validFrom:this.validFrom;
       validTo:this.validTo;

       const momentDate1 = new Date(this.validFrom); // Replace event.value with your date value
       const formattedDate1 = moment(momentDate1).format("DD/MM/YYYY");
       console.log(formattedDate1);

       const momentDate2 = new Date(this.validTo); // Replace event.value with your date value
       const formattedDate2 = moment(momentDate2).format("DD/MM/YYYY");
       console.log(formattedDate2);

      const newcontract={
            //hotelName:this.hotelName,
            contractId:this.contractId,
            validFrom:formattedDate1,
            validTo:formattedDate2,
            markup:this.markup,
           // roomtype1:this.roomtype1,
          //  description1:this.description1,
           // maxadults1:this.maxadults1,
           // roomtype2:this.roomtype2,
           // description2:this.description2,
        //    maxadults2:this.maxadults2
      };
      console.log(newcontract);

      this.contractService.addContract(newcontract).subscribe(res=>{
            console.log("inside method");
             if (res.state){
                console.log("done");
              }
          });

    }

}
