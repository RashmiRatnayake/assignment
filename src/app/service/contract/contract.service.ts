import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  newcontract:any;
  selectedhotel:any;

  constructor(private http: HttpClient) { }

    addContract(newcontract):Observable<any>{
        console.log(newcontract);
        return this.http.post<any>("http://localhost:3000/contracts/addnewcontract",newcontract);

    }

    findHotel(selectedhotel):Observable<any>{
        console.log(selectedhotel);
        return this.http.post<any>("http://localhost:3000/hotels/findHotelDetails",selectedhotel);

    }

}