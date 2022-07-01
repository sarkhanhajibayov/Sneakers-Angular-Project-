import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Brand } from '../models/brand';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = "Brand";
  myAppUrl: any;

  constructor(private http: HttpClient) { }

  public getBrands() : Observable<Brand[]>{
    return this.http.get<Brand[]>(`${environment.apiUrl}/${this.url}`)
  }

  public updateBrand(brand:Brand) : Observable<Brand[]>{
    return this.http.put<Brand[]>(`${environment.apiUrl}/${this.url}`,
    brand)
  }

  public createBrand(brand:Brand) : Observable<Brand[]>{
    return this.http.post<Brand[]>(`${environment.apiUrl}/${this.url}`,
    brand)
  }

  public deleteBrand(brand:Brand) : Observable<Brand[]>{
    return this.http.post<Brand[]>(`${environment.apiUrl}/${this.url}/${brand.id}`,
    brand)
  }


}
