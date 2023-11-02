import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {



  constructor(private http: HttpClient) { }



  getTerritories(): Observable<any[]> {
    // Replace 'API_URL' with the actual URL of your API that provides territory data.
    return this.http.get<any[]>('http://wap.matrixads.in/mglobopay/getAllTerritoryList');
  }

  getOperator(id: any): Observable<any[]> {
    return this.http.get<any[]>('http://wap.matrixads.in/mglobopay/getOperatorListByTerritoryId?territoryId=' + id);
  }



  getBillers(id: any) {
    var body = { operatorid: id }; // Assuming your server expects data in this format
    return this.http.post('http://wap.matrixads.in/mglobopay/getBillerListByOperatorId', body)
  }


  getMediaSource(data: any) {

    // Assuming your server expects data in this format

    console.log("MediaSource API", "" + "'" + data.billerName + "'" + "")
    return this.http.post('http://wap.matrixads.in/mglobopay/getMediaListByOperatorIdAndBillerName', {
      "operatorid": data.operatorid,
      "billerName": "" + "'" + data.billerName + "'" + ""
    })

  }


}
