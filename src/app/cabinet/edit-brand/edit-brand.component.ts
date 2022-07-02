import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Brand } from '../models/brand';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-edit-brand',
  templateUrl: './edit-brand.component.html',
  styleUrls: ['./edit-brand.component.css']
})
export class EditBrandComponent implements OnInit {



  constructor( private apiService:ApiService) { }

  ngOnInit(): void {
  }

  

  

 

}
