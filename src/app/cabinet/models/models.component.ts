import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AddModelComponent } from '../add-model/add-model.component';
import { DeleteModelComponent } from '../delete-model/delete-model.component';
import { ApiService } from '../services/api.service';
export interface Models {
  id: number,
  model: string,
}
@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.css']
})
export class ModelsComponent implements OnInit {
  modelArray: Models[]=[];
  displayedColumns: string[] = ['model', 'actions'];
  dataSource = new MatTableDataSource<Models>(this.modelArray);
  showSpinner=true;
  color = '#674b47';
  limit:any=5;
  pageIndex:any=0;
  skip:any=0;
  


  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource<Models>(this.modelArray);
    this.dataSource.paginator = this.paginator;
  }

  constructor(public dialog: MatDialog,  public apiService: ApiService) {
    this.get_models(5, 0, false);
   }

   openDialog(label: string, id: any){
    this.dialog.open(AddModelComponent, {
      data:{label: `${label}`, id: id}
    });
  }

  openDeleteDialog(label:string, id:number){
    this.dialog.open(DeleteModelComponent,{
      data:{label: `${label}`, id: id}
    });
  }

  get_models(limit:number, skip:number, isExport:boolean){
    this.modelArray=[];
    this.apiService.getModels(limit,skip,isExport).subscribe(data=>{
      console.log(data);
      for(let element of data.response.data){
        this.modelArray.push({
          id: element.id,
          model: element.model ? element.model : '',
        })
      }
      this.paginator.length = data.response.total;
      this.dataSource = new MatTableDataSource<Models>(this.modelArray);
      this.showSpinner=false;  
      
    });
  }

  delete_model(id:any){
    this.openDeleteDialog("model", id);
  }

  pageChanged(event: any) {
    this.showSpinner=true;
    this.limit=event.pageSize;
    this.pageIndex=event.pageIndex;
    this.get_models(event.pageSize,  event.pageSize * event.pageIndex, false);
  }
  ngOnInit(): void {
  }

}
