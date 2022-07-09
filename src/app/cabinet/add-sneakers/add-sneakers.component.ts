import { DatePipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Brands } from '../brands/brands.component';
import { Models } from '../models/models.component';
import { ApiService } from '../services/api.service';
import { Types } from '../types/types.component';
export interface DialogData {
  label: string;
  id: any;
}

interface Brand {
  id: number;
  brand: string;
};
interface Model {
  id: number;
  model: string;
}
interface Type {
  id: number;
  type: string;
}
@Component({
  selector: 'app-add-sneakers',
  templateUrl: './add-sneakers.component.html',
  styleUrls: ['./add-sneakers.component.css']
})
export class AddSneakersComponent implements OnInit {
  data: any;
  label: string;
  id: any;
  sneakerForm: FormGroup;
  showSpinner = false;
  brandArray: Brands[] = [];
  modelArray: Models[] = [];
  typeArray: Types[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) data: DialogData, private datePipe: DatePipe, private fb: FormBuilder, public apiService: ApiService, private dialog: MatDialog) {
    this.sneakerForm = this.fb.group({});
    this.data = data;
    this.label = data.label;
    this.id = data.id;
    this.get_brandss();
    this.get_modelss();
    this.get_typess();
    if (this.label == "new") {
      this.sneakerForm = this.fb.group({
        brandId: ['', Validators.required],
        modelId: ['',Validators.required],
        typeId: ['',Validators.required],
        price: [0,Validators.required],
      });
    } else {
      this.get_sneakers(this.id);
    }
   }
   showOverlay: boolean = false;
   showAddSneakerModal: boolean = false;

   openNewSneakerModal() {
    this.showOverlay = true;
    this.showAddSneakerModal = true;
  }

  closeNewSneakerModal() {
    this.showOverlay = false;
    this.showAddSneakerModal = false;
  }

  add_sneaker() {
    // console.log(JSON.stringify(this.sneakerForm.value))
    console.log(this.sneakerForm.value)
    if (this.sneakerForm.invalid) {
      this.sneakerForm.get("brandId")?.markAsTouched();
      this.sneakerForm.get("modelId")?.markAsTouched();
      this.sneakerForm.get("typeId")?.markAsTouched();
      this.sneakerForm.get("price")?.markAsTouched();
      return;
    }
    this.showSpinner = true;
    if (this.label == "new") {
      this.apiService.addSneaker(this.sneakerForm.value).subscribe({
        next:data => {
        console.log(data);
        if (data.errorCode && data.errorCode == 1) {
          this.apiService.messageDialog(data.status.message, false);
        } else {
          this.apiService.messageDialog(data.status.message, true);
        }
        this.showSpinner = false;
      },
        error:err => {
          this.apiService.messageDialog('Serverdə xəta baş verdi', false);
          this.showSpinner = false;
        }
      });
    } else {
      this.apiService.updateSneaker(this.sneakerForm.value, this.id).subscribe({
        next:data => {

        console.log(data);
        if (data.errorCode && data.errorCode == 1) { 
          this.apiService.messageDialog(data.status.message, false);
        } else { 
          this.apiService.messageDialog(data.status.message, true);
        }
        this.showSpinner = false;
      },
        error:(err) => {
          this.apiService.messageDialog('Serverdə xəta baş verdi', false);
          this.showSpinner = false;
        }
      });
    }
    

    }
    get_sneakers(id:any){
      this.showSpinner = true;
      this.apiService.getSneaker(id).subscribe({
        next:data=>{
        if (data.errorCode && data.errorCode == 1) {
          this.apiService.messageDialog(data.response, false);
          this.showSpinner = false;
        } else {
          this.sneakerForm = this.fb.group({
            brandId: [data.response.brandId],
            modelId: [data.response.modelId],
            typeId: [data.response.typeId],
            price: [data.response.price]
            // startDate: [data.response.startDate],
            // endDate: [data.response.endDate]
  
          });
        }
        this.showSpinner = false;
      },
      error:err => {
        this.apiService.messageDialog('Serverdə xəta baş verdi', false);
        this.showSpinner = false;
      }
    });
    }

    get_brandss(){
      this.apiService.getBrandss().subscribe((data) => {
        this.brandArray = data.result;
      });
    }
  
    get_modelss(){
      this.apiService.getModelss().subscribe((data) => {
        this.modelArray = data.result;
      });
    }

    get_typess(){
      this.apiService.getTypess().subscribe((data) => {
        this.typeArray = data.result;
      });
    }
  ngOnInit(): void {
  }
}
