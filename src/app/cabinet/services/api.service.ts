import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import {Router} from '@angular/router'
import { environment } from 'src/environments/environment';
import { MessageDialogComponent } from '../message-dialog/message-dialog.component';
import { Brand } from '../models/brand';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  e(id: any): void | Observable<any> {
    throw new Error('Method not implemented.');
  }
  myAppUrl: any;

  constructor(
    private http: HttpClient,
    private router: Router,
    private dialog: MatDialog,
    private datePipe: DatePipe) { }

    public messageDialog(text: string, isRefresh: boolean) {
      this.dialog.open(MessageDialogComponent, {
        width: '500px',
        position: {
          top: '10px',
        },
        data: { Text: `${text}`, isRefresh: isRefresh },
        autoFocus: false,
      });
    }

    getBrands(limit: number, skip: number, isExport: boolean): Observable<any> {
      this.myAppUrl = "https://localhost:44310/api";
      let url = this.myAppUrl + `/Brand/get-brands?limit=${limit}&skip=${skip}&isExport=${isExport}`;
      return this.http.get<any>(url).pipe(catchError (err => of (err) ));
    }

    getBrand(id: number): Observable<any> {
      this.myAppUrl = "https://localhost:44310/api";
      let url = this.myAppUrl + `/Brand/get-brand?id=${id}`;
      return this.http.get<any>(url);
    }

  addBrand(model: any): Observable<any> {
    this.myAppUrl = "https://localhost:44310/api";
    let url = this.myAppUrl + '/Brand/add-brand';
    return this.http.post<any>(url, model);
  }

  updateBrand(model: any, id: number): Observable<any> {
    this.myAppUrl = "https://localhost:44310/api";
    let url = this.myAppUrl + '/Brand/update_brand?id=' + id;
    return this.http.post<any>(url, model);
  }

  getSizes(limit: number, skip: number, isExport: boolean): Observable<any> {
    this.myAppUrl = "https://localhost:44310/api";
    let url = this.myAppUrl + `/Size/get-sizes?limit=${limit}&skip=${skip}&isExport=${isExport}`;
    return this.http.get<any>(url).pipe(catchError (err => of (err) ));
  }

  getSize(id: number): Observable<any> {
    this.myAppUrl = "https://localhost:44310/api";
    let url = this.myAppUrl + `/Size/get-size?id=${id}`;
    return this.http.get<any>(url);
  }

addSize(model: any): Observable<any> {
  this.myAppUrl = "https://localhost:44310/api";
  let url = this.myAppUrl + '/Size/add-size';
  return this.http.post<any>(url, model);
}

updateSize(model: any, id: number): Observable<any> {
  this.myAppUrl = "https://localhost:44310/api";
  let url = this.myAppUrl + '/Size/update_size?id=' + id;
  return this.http.post<any>(url, model);
}

getTypes(limit: number, skip: number, isExport: boolean): Observable<any> {
  this.myAppUrl = "https://localhost:44310";
  let url = this.myAppUrl + `/get-types?limit=${limit}&skip=${skip}&isExport=${isExport}`;
  return this.http.get<any>(url).pipe(catchError (err => of (err) ));
}

getType(id: number): Observable<any> {
  this.myAppUrl = "https://localhost:44310";
  let url = this.myAppUrl + `/get-type?id=${id}`;
  return this.http.get<any>(url);
}

addType(model: any): Observable<any> {
this.myAppUrl = "https://localhost:44310";
let url = this.myAppUrl + '/add-type';
return this.http.post<any>(url, model);
}

updateType(model: any, id: number): Observable<any> {
this.myAppUrl = "https://localhost:44310";
let url = this.myAppUrl + '/update_type?id=' + id;
return this.http.post<any>(url, model);
}

deleteBrand(id: number): Observable<any> {
  this.myAppUrl = "https://localhost:44310/api";
  let url = this.myAppUrl + '/Brand/delete-brand?id=' + id;
  return this.http.delete<any>(url);
}
deleteType(id: number): Observable<any> {
  this.myAppUrl = "https://localhost:44310/api";
  let url = this.myAppUrl + '/delete-type?id=' + id;
  return this.http.delete<any>(url);
}
deleteSize(id: number): Observable<any> {
  this.myAppUrl = "https://localhost:44310/api";
  let url = this.myAppUrl + '/Size/delete-size?id=' + id;
  return this.http.delete<any>(url);
}

  
 

 




}
