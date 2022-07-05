import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../services/api.service';
export interface DialogData {
  label: string,
  id: any
}
@Component({
  selector: 'app-add-size',
  templateUrl: './add-size.component.html',
  styleUrls: ['./add-size.component.css']
})
export class AddSizeComponent implements OnInit {
  data: any;
  label: string;
  id: any;
  sizeForm: FormGroup;
  showSpinner = false;
  constructor(@Inject(MAT_DIALOG_DATA) data: DialogData, private fb: FormBuilder, public apiService: ApiService, private dialog: MatDialog) { 
    this.data = data;
    this.sizeForm = this.fb.group({});
      this.label = data.label;
      this.id = data.id;

      
    if (this.label == "new"){
      this.sizeForm = this.fb.group({
        size: ['',[Validators.required, Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]],
        key : ['', [Validators.required, Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]]
      });
    } else {
        this.get_size(this.id);
    }
  }
  get_size(id: any){
    this.showSpinner = true;
    this.apiService.getSize(id).subscribe(data => {
      if (data.errorCode && data.errorCode == 1) {
        this.apiService.messageDialog(data.response, false);
        this.showSpinner = false;
      } else {
        this.sizeForm = this.fb.group({
          size: [data.response.size, [Validators.required, Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]],
        });
      }
      this.showSpinner = false;
    },
      err => {
        this.apiService.messageDialog('Serverdə xəta baş verdi', false);
        this.showSpinner = false;
      });
  }
  add_size(){
    if (this.sizeForm.invalid) {
      this.sizeForm.get("size")?.markAsTouched();
      return;
    }
    this.showSpinner = true;
    if (this.label == "new") {
      this.sizeForm.value.brand = this.sizeForm.controls['size'].value.trim();
      this.apiService.addSize(this.sizeForm.value).subscribe(data=>{
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
      this.apiService.updateSize(this.sizeForm.value, this.id).subscribe(data=>{
        if (data.errorCode && data.errorCode == 1) {
          this.apiService.messageDialog(data.status.message, false);
        } else {
          this.apiService.messageDialog(data.status.message, true);
        }
        this.showSpinner = false;
      },
      (err) => {
        this.apiService.messageDialog('Serverdə xəta baş verdi', false);
        this.showSpinner = false;
      })
    }
  }

  ngOnInit(): void {
  }

}
