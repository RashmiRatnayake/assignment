import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  myDatePicker1:any;
  nights:any;
  rooms:any;
  adults:any;

  minDate = new Date();
  maxDate = new Date(2020, 11, 31); //date starts with month 0 = january. so this is december 10th

  ngOnInit() {
  }

  newSearchData(){
          const newsearch={
                myDatePicker1:this.myDatePicker1,
                nights:this.nights,
                rooms:this.rooms,
                adults:this.adults
          };
          console.log(newsearch);
        }
}
