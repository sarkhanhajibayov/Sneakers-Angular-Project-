import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../services/api.service';
export interface DialogData {
  label: string,
  id: any
}
@Component({
  selector: 'app-delete-model',
  templateUrl: './delete-model.component.html',
  styleUrls: ['./delete-model.component.css']
})
export class DeleteModelComponent implements OnInit {
  data:any;
  label: string;
  id: any;
  constructor(@Inject(MAT_DIALOG_DATA)  data: DialogData, public apiService: ApiService) {
    this.data = data;
    this.label = data.label;
    this.id = data.id;
   }

   deleteFunction(){
    if(this.label == "model"){
      this.apiService.deleteModel(this.id).subscribe(data=>{
      if (data.status.errCode != 0) {
        this.apiService.messageDialog(data.status.message, false);
      } else {
        this.apiService.messageDialog(data.status.message, true);
      }
    });
    }
  }

  ngOnInit(): void {
  }

}
