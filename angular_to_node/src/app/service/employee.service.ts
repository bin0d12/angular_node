import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs';
// import { HttpErrorHandler} from './http'
import { ErrorHandler } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})

export class EmployeeService {
  
  // getUsers // private errorHandlor: ErrorHandler
  //   () {
  //   throw new Error('Method not implemented.');
  // }
  private apiUrl = `${environment.apiUrl}/api/employee`;
  
  // private errorHandlor: ErrorHandler
//   app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "GET , PUT , POST , DELETE");
//     res.header("Access-Control-Allow-Headers", "Content-Type, x-requested-with");
//     next(); // Important
// })
  // httpOptions = {
  //   Headers: new HttpHeaders({
  //     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200')
  //     'Content-type': 'application/json',
  //   }),
  // };
   httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    withCredentials: true
    // observe: 'response' as 'response'
  };
  
  constructor(private http: HttpClient) {}
  
  getUsers() {
    return this.http.get(`${this.apiUrl}`);
  }
}

