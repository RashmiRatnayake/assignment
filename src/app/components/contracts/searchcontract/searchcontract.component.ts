import { Component, OnInit } from '@angular/core';
import {ContractService} from '../../../service/contract/contract.service';
import { SearchService } from '../../../service/search/search.service';



@Component({
  selector: 'app-searchcontract',
  templateUrl: './searchcontract.component.html',
  styleUrls: ['./searchcontract.component.css']
})
export class SearchcontractComponent implements OnInit {

  constructor(private contractService:ContractService,
                            private searchService: SearchService) { }

  hotels:any;
  contractHotelId:any;
  searchContractResults:any;

  ngOnInit() {
  this.searchService.searchHotels().subscribe(res=> {
        this.hotels=res;
        });
  }

  newSearchContractData(){
        const newsearchcontract={
              contractHotelId:this.contractHotelId
        };

        this.contractService.searchContract(newsearchcontract).subscribe(res=>{
                    this.searchContractResults=res;
        });
   }
}
