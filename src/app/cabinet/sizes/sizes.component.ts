import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AddSizeComponent } from '../add-size/add-size.component';
import { DeleteSizeComponent } from '../delete-size/delete-size.component';
import { ApiService } from '../services/api.service';
export interface Sizes {
  id: number,
  size: string,
}
@Component({
  selector: 'app-sizes',
  templateUrl: './sizes.component.html',
  styleUrls: ['./sizes.component.css']
})
export class SizesComponent implements OnInit {
  sizeArray: Sizes[]=[];
  displayedColumns: string[] = ['size', 'actions'];
  dataSource = new MatTableDataSource<Sizes>(this.sizeArray);
  showSpinner=true;
  color = '#E91717';
  limit:any=5;
  pageIndex:any=0;
  skip:any=0;


  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource<Sizes>(this.sizeArray);
    this.dataSource.paginator = this.paginator;
  }
  constructor(public dialog: MatDialog,  public apiService: ApiService) {
    this.get_sizes(5, 0, false);
   }



   openDialog(label: string, id: any){
    this.dialog.open(AddSizeComponent, {
      data:{label: `${label}`, id: id}
    });
  }

  openDeleteDialog(label:string, id:number){
    this.dialog.open(DeleteSizeComponent,{
      data:{label: `${label}`, id: id}
    });
  }

  get_sizes(limit:number, skip:number, isExport:boolean){
    this.sizeArray=[];
    this.apiService.getBrands(limit,skip,isExport).subscribe(data=>{
      console.log(data);
      for(let element of data.response.data){
        this.sizeArray.push({
          id: element.id,
          size: element.size ? element.size : '',
        })
      }
      this.paginator.length = data.response.total;
      this.dataSource = new MatTableDataSource<Sizes>(this.sizeArray);
      this.showSpinner=false;  
      
    });
  
  }

  delete_size(id:any){
    this.openDeleteDialog("size", id);
  }

  pageChanged(event: any) {
    this.showSpinner=true;
    this.limit=event.pageSize;
    this.pageIndex=event.pageIndex;
    this.get_sizes(event.pageSize,  event.pageSize * event.pageIndex, false);
  }

  ngOnInit(): void {
  }

}
function DeleteComponent(DeleteComponent: any, arg1: { data: { label: string; id: number; }; }) {
  throw new Error('Function not implemented.');
}

