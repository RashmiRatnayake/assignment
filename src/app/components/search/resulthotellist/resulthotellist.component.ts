import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../../service/search/search.service';

@Component({
  selector: 'app-resulthotellist',
  templateUrl: './resulthotellist.component.html',
  styleUrls: ['./resulthotellist.component.css']
})

export class ResulthotellistComponent implements OnInit {

  hotels:any;

  constructor(private searchService: SearchService) { }


  ngOnInit() {
    this.searchService.searchHotels().subscribe(res=> {
    this.hotels=res;
    console.log(res);
    })
  }

}
