import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../services/api.service';

export interface DialogData {
  label: string,
  id: any
}
@Component({
  selector: 'app-add-model',
  templateUrl: './add-model.component.html',
  styleUrls: ['./add-model.component.css']
})
export class AddModelComponent implements OnInit {
  data: any;
  label: string;
  id: any;
  modelForm: FormGroup;
  showSpinner = false;

  constructor(@Inject(MAT_DIALOG_DATA) data: DialogData, private fb: FormBuilder, public apiService: ApiService, private dialog: MatDialog) {
    this.data = data;
    this.modelForm = this.fb.group({});
      this.label = data.label;
      this.id = data.id;

      if (this.label == "new"){
        this.modelForm = this.fb.group({
          model: ['',[Validators.required, Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]],
        });
      } else {
          this.get_model(this.id);
      }
     }

     get_model(id: any){
      this.showSpinner = true;
      this.apiService.getModel(id).subscribe(
        {
        next:data => {
        if (data.errorCode && data.errorCode == 1) {
          this.apiService.messageDialog(data.response, false);
          this.showSpinner = false;
        } else {
          this.modelForm = this.fb.group({
            model: [data.response.model, [Validators.required, Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]],
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

    add_model(){
      if (this.modelForm.invalid) {
        this.modelForm.get("model")?.markAsTouched();
        return;
      }
      this.showSpinner = true;
      if (this.label == "new") {
        this.modelForm.value.model = this.modelForm.controls['model'].value.trim();
        this.apiService.addModel(this.modelForm.value).subscribe(
          {
          next:data=>{
          if (data.errorCode && data.errorCode == 1) {
            this.apiService.messageDialog(data.status.message, false);
          } else {
            this.apiService.messageDialog(data.status.message, true);
          }
          this.showSpinner = false;
        },
        error: err => {
          this.apiService.messageDialog('Serverdə xəta baş verdi', false);
          this.showSpinner = false;
        }
      },
      );
      } else {
        this.apiService.updateModel(this.modelForm.value, this.id).subscribe(
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
