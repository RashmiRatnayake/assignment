import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../service/search/search.service';
import {DateAdapter, MAT_DATE_FORMATS} from '@angular/material/core';
import { AppDateAdapter, APP_DATE_FORMATS } from '../../format-datepicker';

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

  results:any;

  minDate = new Date();
  maxDate = new Date(2020, 11, 31); //date starts with month 0 = january. so this is december 10th

  ngOnInit() {
  }

  newSearchData(){

          nights:this.nights;

          const newsearch={
                checkindate:this.checkindate,
              //  checkoutdate:this.checkindate+this.nights,
              checkoutdate:this.checkindate,
                rooms:this.rooms,
                adults:this.adults
          };
          console.log(newsearch);

          this.searchService.searchResults(newsearch).subscribe(res=> {
              this.results=res;
              console.log(res);
              });

        }
}
