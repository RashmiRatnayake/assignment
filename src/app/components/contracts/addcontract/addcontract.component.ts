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

  contractHotelId:String;
  validFrom:any;
  validTo:any;
  markup:any;
  roomtype1:String;
  description1:String;
  maxadults1:any;
  price1:any;
  roomtype2:String;
  description2:String;
  no1:any;
  no2:any;
  maxadults2:any;
  price2:any;
  contractId:String;


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

      // const momentDate1 = new Date(this.validFrom); // Replace event.value with your date value
       //const formattedDate1 = moment(momentDate1).format("DD-MM-YYYY");
      // console.log(formattedDate1);

    //   const momentDate2 = new Date(this.validTo); // Replace event.value with your date value
     //  const formattedDate2 = moment(momentDate2).format("DD-MM-YYYY");
     //  console.log(formattedDate2);

   //   const selectedhotel={
     //       hotelName:this.hotelName
      //}

      var myContractId = uuid.v4();
      console.log(myContractId);


      const newcontract={

            contractId:myContractId,
            validFrom:this.validFrom,
            validTo:this.validTo,
            markup:this.markup,
            contractHotelId:this.contractHotelId
           // roomtype1:this.roomtype1,
          //  description1:this.description1,
           // maxadults1:this.maxadults1,
           // roomtype2:this.roomtype2,
           // description2:this.description2,
        //    maxadults2:this.maxadults2
      };
      console.log(newcontract);
    //  console.log(selectedhotel);

 //     this.contractService.findHotel(selectedhotel).subscribe(res=>{
 //       console.log(res);
 //     });

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
        contractdata: newcontract,
        newroomtype1data: newroomtype1,
        newroomtype2data: newroomtype2
        };


      this.contractService.addContract(newcontract).subscribe(res=>{
      //this.contractService.addContract(data).subscribe(res=>{
            console.log("inside method");
            console.log(res);
            // if (res.state){
            //    console.log("done");
            //  }
          });

    }

}

