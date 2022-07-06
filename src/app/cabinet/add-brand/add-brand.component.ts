import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../services/api.service';


export interface DialogData {
  label: string,
  id: any
}

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.css']
})


export class AddBrandComponent implements OnInit {
  data: any;
  label: string;
  id: any;
  brandForm: FormGroup;
  showSpinner = false;


  constructor(@Inject(MAT_DIALOG_DATA) data: DialogData, private fb: FormBuilder, public apiService: ApiService, private dialog: MatDialog) { 
  this.data = data;
  this.brandForm = this.fb.group({});
    this.label = data.label;
    this.id = data.id;

    if (this.label == "new"){
      this.brandForm = this.fb.group({
        brand: ['',[Validators.required, Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]],
      });
    } else {
        this.get_brand(this.id);
    }
   }
   

   get_brand(id: any){
    this.showSpinner = true;
    this.apiService.getBrand(id).subscribe(data => {
      if (data.errorCode && data.errorCode == 1) {
        this.apiService.messageDialog(data.response, false);
        this.showSpinner = false;
      } else {
        this.brandForm = this.fb.group({
          brand: [data.response.brand, [Validators.required, Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]],
        });
      }
      this.showSpinner = false;
    },
      err => {
        this.apiService.messageDialog('Serverdə xəta baş verdi', false);
        this.showSpinner = false;
      });
  }


  
  add_brand(){
    if (this.brandForm.invalid) {
      this.brandForm.get("brand")?.markAsTouched();
      return;
    }
    this.showSpinner = true;
    if (this.label == "new") {
      this.brandForm.value.brand = this.brandForm.controls['brand'].value.trim();
      this.apiService.addBrand(this.brandForm.value).subscribe(data=>{
        if (data.errorCode && data.errorCode == 1) {
          this.apiService.messageDialog(data.status.message, false);
        } else {
          this.apiService.messageDialog(data.status.message, true);
        }
        this.showSpinner = false;
      },
      err => {
        this.apiService.messageDialog('Serverdə xəta baş verdi', false);
        this.showSpinner = false;
      })
    } else {
      this.apiService.updateBrand(this.brandForm.value, this.id).subscribe(
        {
        next:data=>{
        if (data.errorCode && data.errorCode == 1) {
          this.apiService.messageDialog(data.status.message, false);
        } else {
          this.apiService.messageDialog(data.status.message, true);
        }
        this.showSpinner = false;
      },
      error:  (err) => {
        this.apiService.messageDialog('Serverdə xəta baş verdi', false);
        this.showSpinner = false;
      }
    },
     )
    }
  }
  
  ngOnInit(): void {
  }

}
