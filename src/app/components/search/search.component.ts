import { Component, OnInit } from '@angular/core';

import { SearchService } from '../../service/search/search.service';

import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { AppDateAdapter, APP_DATE_FORMATS } from '../../format-datepicker';

import * as moment from 'moment';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [
        {provide: DateAdapter, useClass: AppDateAdapter},
        {provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS}
      ]
})
export class SearchComponent implements OnInit {

  constructor(private searchService: SearchService) { }

  checkindate:any;
  checkoutdate:any;
  nights:any;
  rooms:any;
  adults:any;
  dataavailable:boolean;
  dataunavailable:boolean;

  results:any;

  contractId:any;
  contractHotelId:any;
  results2:any;

  minDate = new Date();
  maxDate = new Date(2025, 11, 31); //date starts with month 0 = january. so this is december 31st

  ngOnInit() {
  }

  newSearchData(){

         const momentDate1 = new Date(this.checkindate); // Replace event.value with your date value
         const formattedDate2 = moment(momentDate1).format("YYYY-MM-DD");





         const momentDate2=moment(momentDate1, "YYYY-MM-DD").add(this.nights, 'days').format("YYYY-MM-DD");


          const newsearch={
                checkindate:formattedDate2,
                checkoutdate:momentDate2,
                nights:this.nights,
                rooms:this.rooms,
                adults:this.adults
          };
          console.log(newsearch);

          this.searchService.searchResults(newsearch).subscribe(res=> {



              console.log("search results=");
              console.log(res);
              //console.log(res[1].hotelId);


              if(Object.keys(res).length >=1){
                this.dataavailable= true;
                console.log("true",this.dataavailable);

                for(var i = 0; i < Object.keys(res).length; i++){
                                console.log(res[i].hotelId);
                                var x=res[i].hotelId;
                                var y=res[i].roomtypeId;

                                  var b = 0;
                                  for(var a = 0; a < Object.keys(res).length; a++){
                                    if( res[a].hotelId == x && res[a].roomtypeId == y){
                                      b++;
                                    }
                                  }

                                  console.log("this is b");
                                  console.log(b);



                                  if (b >= this.rooms){
                                      console.log("set as true");
                                      console.log(i);
                                      res[i].availability="true";
                                  }
                              }


              }
              else{
                this.dataavailable=false;
              }

              this.results=res;


          });

        }

}
