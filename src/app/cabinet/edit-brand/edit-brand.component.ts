import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Brand } from '../models/brand';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-edit-brand',
  templateUrl: './edit-brand.component.html',
  styleUrls: ['./edit-brand.component.css']
})
export class EditBrandComponent implements OnInit {
@Input() brand?: Brand;
@Output() brandUpdated = new EventEmitter<Brand[]>();


  constructor( private apiService:ApiService) { }

  ngOnInit(): void {
  }

  updateBrand(brand: Brand){
    this.apiService.updateBrand(brand).subscribe((brands:Brand[]) => this.brandUpdated.emit(brands));
  }

  deleteBrand(brand: Brand){
    this.apiService.deleteBrand(brand).subscribe((brands:Brand[]) => this.brandUpdated.emit(brands));

  }

  createBrand(brand: Brand){
    this.apiService.createBrand(brand).subscribe((brands:Brand[]) => this.brandUpdated.emit(brands));

  }

}
