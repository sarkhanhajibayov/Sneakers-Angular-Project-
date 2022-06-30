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

  constructor(private http: HttpClient) { }

  public getBrands() : Brand[]{

    let brand = new Brand();
    brand.id = 1;
    brand.brand = "Adidas"

    return [brand]
  }

  postProduct(data: any){
    return this.http.post<any>('http://localhost:8000/productList/',data)
  }
  getProduct (){
    return this.http.get<any>('http://localhost:8000/productList/');
  }
  putProduct(data:any, id : number){
    return this.http.put<any>('http://localhost:8000/productList/'+id,data);
  }
  deleteProduct(id:number){
    return this.http.delete<any>('http://localhost:8000/productList/'+id)
  }
}
