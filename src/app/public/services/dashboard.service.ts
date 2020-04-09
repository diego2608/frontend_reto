import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private _url: string = environment.apiUrl;
  
  constructor(private http: HttpClient) { 
  }

  getKpiClients(): Observable<any> {
    return this.http.get<any>(this._url + 'kpideclientes');
  }

  getClients(): Observable<any> {
    return this.http.get<any>(this._url);
  }

  saveClient(data) {
    const url: string = this._url + 'creacliente';
    return this.http.post<any>(url, data);
  }

}
