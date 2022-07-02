import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
export interface DialogData {
  Text: string,
  obj_message: any,
  isRefresh: boolean
}
@Component({
  selector: 'app-message-dialog',
  templateUrl: './message-dialog.component.html',
  styleUrls: ['./message-dialog.component.css']
})
export class MessageDialogComponent implements OnInit {
  data: any;
  constructor(@Inject(MAT_DIALOG_DATA)  data: DialogData, private dialog: MatDialog) { 
  this.data = data;
}
reload(){
  window.location.reload();
}
isRefresh(value: boolean)
{
  if(value)
  {
      window.location.reload();
  }
}
  ngOnInit(): void {
  }

}
