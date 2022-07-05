import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../services/api.service';
export interface DialogData {
  label: string,
  id: any
}
@Component({
  selector: 'app-delete-type',
  templateUrl: './delete-type.component.html',
  styleUrls: ['./delete-type.component.css']
})
export class DeleteTypeComponent implements OnInit {
  data:any;
  label: string;
  id: any;
  constructor(@Inject(MAT_DIALOG_DATA)  data: DialogData, public apiService: ApiService) { 
    this.data = data;
    this.label = data.label;
    this.id = data.id;
  }

  deleteFunction(){
    if (this.data.status.errCode != 0) {
      this.apiService.messageDialog(this.data.status.message, false);
    } else {
      this.apiService.messageDialog(this.data.status.message, true);
    }
    
    
}

  ngOnInit(): void {
  }

}
