import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../services/api.service';
export interface DialogData {
  label: string,
  id: any
}
@Component({
  selector: 'app-add-type',
  templateUrl: './add-type.component.html',
  styleUrls: ['./add-type.component.css']
})
export class AddTypeComponent implements OnInit {
  data: any;
  label: string;
  id: any;
  typeForm: FormGroup;
  showSpinner = false;



  constructor(@Inject(MAT_DIALOG_DATA) data: DialogData, private fb: FormBuilder, public apiService: ApiService, private dialog: MatDialog) {
    this.data = data;
    this.typeForm = this.fb.group({});
      this.label = data.label;
      this.id = data.id;

      if (this.label == "new"){
        this.typeForm = this.fb.group({
          type: ['',[Validators.required, Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]],
        });
      } else {
          this.get_type(this.id);
      }
   }
   get_type(id: any){
    this.showSpinner = true;
    this.apiService.getType(id).subscribe({
      next:data => {
      if (data.errorCode && data.errorCode == 1) {
        this.apiService.messageDialog(data.response, false);
        this.showSpinner = false;
      } else {
        this.typeForm = this.fb.group({
          type: [data.response.type, [Validators.required, Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]],
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



  add_type(){
    if (this.typeForm.invalid) {
      this.typeForm.get("type")?.markAsTouched();
      return;
    }
    this.showSpinner = true;
    if (this.label == "new") {
      this.typeForm.value.type = this.typeForm.controls['type'].value.trim();
      this.apiService.addType(this.typeForm.value).subscribe({
        next:data=>{
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
    },
    );
    }  else {
      this.apiService.updateType(this.typeForm.value, this.id).subscribe(
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
