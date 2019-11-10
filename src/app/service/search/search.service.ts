import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  newsearch:any;

  constructor(private http: HttpClient) { }

  searchHotels() {
      return this.http.get<any[]>("http://localhost:3000/hotels");
    }

  searchResults(newsearch) {
        console.log("second newsearch", newsearch);
        return this.http.post("http://localhost:3000/results?checkindate="+newsearch.checkindate+"&checkoutdate="+newsearch.checkoutdate+"&rooms="+newsearch.rooms+"&adults="+newsearch.adults+"&nights="+newsearch.nights,newsearch);
      }

}
