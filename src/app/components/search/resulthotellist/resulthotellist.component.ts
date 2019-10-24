import { Component, OnInit, ViewChild } from '@angular/core';
import {Observable} from 'rxjs';
import {FormControl} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import {MatSnackBar, MatDialog, MatTableDataSource, MatSort, MatPaginator} from '@angular/material';
import { SearchService } from '../../../service/search/search.service';

@Component({
  selector: 'app-resulthotellist',
  templateUrl: './resulthotellist.component.html',
  styleUrls: ['./resulthotellist.component.css']
})

export class ResulthotellistComponent implements OnInit {

  hotels:any;

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private searchService: SearchService) { }

  options: string[] = ['Angular', 'React', 'Vue'];
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;



  ngOnInit() {



    this.searchService.searchHotels().subscribe(res=> {
    this.hotels=res;
    console.log(res);
    });



   }



}
