import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {environment} from 'src/environments/environment';
import {Requester} from "../Model/Requester";
import { Orders } from '../myorders/orders';


@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  constructor(private http: HttpClient) {
  }

  url: string = "http://localhost:8081/MmProdReqHeaderEntity/ordered/";
  requesterurl: string = "http://localhost:8081/MmProdReqHeaderEntity/requester/";

//for requesterdetails
  public getMaterials(reqnbr: string): Observable<Orders[]> {
    return this.http.get<Orders[]>(this.url + reqnbr)
  }

//for one requester based on reqnbr
  public getRDetails(reqnbr: string): Observable<Requester> {
    return this.http.get<Requester>(this.requesterurl + reqnbr)
  }

//for requesterdetails
  public updatestatustoRecived(reqnbr: string) {
    return this.http.get("http://localhost:8081/MmProdReqHeaderEntity/recived/" + reqnbr)
  }


  // Delete
  deleteMaterial(id: any): Observable<any> {
    var API_URL = `${this.url}/${id}`;
    return this.http.delete(API_URL).pipe(
      catchError(this.handleError)
    )
  }

  placeOrder(orderObj: any): Observable<any> {
    return this.http.post(environment.apiURL + "/order/placeOrder", orderObj, {responseType: 'json'});
  }

  getOrderSummary(id: []): Observable<any> {
    return this.http.post(environment.apiURL + "/order/orderSummary", id, {responseType: 'json'});
  }

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };


}
