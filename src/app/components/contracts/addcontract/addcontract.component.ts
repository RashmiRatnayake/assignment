import { Component, OnInit } from '@angular/core';
import {ContractService} from '../../../service/contract/contract.service';

import {DateAdapter, MAT_DATE_FORMATS} from '@angular/material/core';
import { AppDateAdapter, APP_DATE_FORMATS } from '../../../format-datepicker';
import { SearchService } from '../../../service/search/search.service';
import * as uuid from 'uuid';



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

  hotels:any;
  contractId:String;
  contractHotelId:String;
  validFrom:any;
  validTo:any;
  markup:any;

  roomtype1:String;
  description1:String;
  maxadults1:any;
  price1:any;
  no1:any;

  roomtype2:String;
  description2:String;
  no2:any;
  maxadults2:any;
  price2:any;

  constructor(private contractService:ContractService,
              private searchService: SearchService
              ) { }

  minDate = new Date();
  maxDate = new Date(2020, 11, 31); //date starts with month 0 = january. so this is december 10th

  ngOnInit() {

  this.searchService.searchHotels().subscribe(res=> {
      this.hotels=res;
      console.log(res);
      });

  }

   newContractData(){

      validFrom:this.validFrom;
      validTo:this.validTo;
      var myContractId = uuid.v4();
      console.log(myContractId);


      const newcontract={

            contractId:myContractId,
            validFrom:this.validFrom,
            validTo:this.validTo,
            markup:this.markup,
            contractHotelId:this.contractHotelId

      };

      console.log(newcontract);

      var myRoomtype1Id = uuid.v4();
      console.log(myRoomtype1Id);

      const newroomtype1={

                    roomtypeId:myRoomtype1Id,
                    numberOfRooms:this.no1,
                    roomtypeName:this.roomtype1,
                    description:this.description1,
                    maxAdults:this.maxadults1,
                    price:this.price1

            };

      var myRoomtype2Id = uuid.v4();
      console.log(myRoomtype2Id);

      const newroomtype2={

                    roomtypeId:myRoomtype2Id,
                    numberOfRooms:this.no2,
                    roomtypeName:this.roomtype2,
                    description:this.description2,
                    maxAdults:this.maxadults2,
                    price:this.price2

             };

      const data={
        contract: newcontract,
        roomtype1: newroomtype1,
        roomtype2: newroomtype2
        };


   //   this.contractService.addContract(newcontract).subscribe(res=>{
   //         console.log("inside method");
   //        console.log(res);

                                                                                                                                     //      });


      this.contractService.addContract(data).subscribe(res=>{
            console.log("inside method");
            console.log(res);
            alert("Contract Added");

          });

    }

}

