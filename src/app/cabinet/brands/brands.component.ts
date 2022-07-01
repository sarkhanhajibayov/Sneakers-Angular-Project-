import { Component, OnInit } from '@angular/core';
import { Brand } from '../models/brand';
import { ApiService } from '../services/api.service';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {
  displayedColumns: string[] = ['id','brand'];
  brands:Brand[] = [];
  brandToEdit? : Brand;
  constructor(private apiService :ApiService) { }

  ngOnInit(): void {
    this.apiService.getBrands().subscribe((result:Brand[])=> (this.brands = result))
  }

  initNewBrand(){
    this.brandToEdit = new Brand();

  }
  editBrand(brand:Brand){
    this.brandToEdit = brand;
  }
}
