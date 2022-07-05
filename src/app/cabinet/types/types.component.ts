import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AddTypeComponent } from '../add-type/add-type.component';
import { DeleteTypeComponent } from '../delete-type/delete-type.component';
import { ApiService } from '../services/api.service';
export interface Types {
  id: number,
  type: string,
}
@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.css']
})
export class TypesComponent implements OnInit {
  typeArray: Types[]=[];
  displayedColumns: string[] = ['type', 'actions'];
  dataSource = new MatTableDataSource<Types>(this.typeArray);
  showSpinner=true;
  color = '#E91717';
  limit:any=5;
  pageIndex:any=0;
  skip:any=0;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource<Types>(this.typeArray);
    this.dataSource.paginator = this.paginator;
  }

  constructor(public dialog: MatDialog,  public apiService: ApiService) { 
    this.get_types(5, 0, false);
  }

  openDialog(label: string, id: any){
    this.dialog.open(AddTypeComponent, {
      data:{label: `${label}`, id: id}
    });
  }

  openDeleteDialog(label:string, id:number){
    this.dialog.open(DeleteTypeComponent,{
      data:{label: `${label}`, id: id}
    });
  }

  get_types(limit:number, skip:number, isExport:boolean){
    this.typeArray=[];
    this.apiService.getTypes(limit,skip,isExport).subscribe(data=>{
      console.log(data);
      for(let element of data.response.data){
        this.typeArray.push({
          id: element.id,
          type: element.type ? element.type : '',
        })
      }
      this.paginator.length = data.response.total;
      this.dataSource = new MatTableDataSource<Types>(this.typeArray);
      this.showSpinner=false;  
      
    });
  
  }

  delete_type(id:any){
    this.openDeleteDialog("type", id);
  }

  pageChanged(event: any) {
    this.showSpinner=true;
    this.limit=event.pageSize;
    this.pageIndex=event.pageIndex;
    this.get_types(event.pageSize,  event.pageSize * event.pageIndex, false);
  }

  ngOnInit(): void {
  }

}

  function DeleteComponent(DeleteComponent: any, arg1: { data: { label: string; id: number; }; }) {
    throw new Error('Function not implemented.');
  }


