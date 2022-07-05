import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from  '@angular/material/dialog';
import { ApiService } from '../services/api.service';
import { AddBrandComponent } from '../add-brand/add-brand.component';
import { DeleteBrandComponent } from '../delete-brand/delete-brand.component';
export interface Brands {
  id: number,
  brand: string,
}


@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {
  brandArray: Brands[]=[];
  displayedColumns: string[] = ['brand', 'actions'];
  dataSource = new MatTableDataSource<Brands>(this.brandArray);
  showSpinner=true;
  color = '#674b47';
  limit:any=5;
  pageIndex:any=0;
  skip:any=0;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource<Brands>(this.brandArray);
    this.dataSource.paginator = this.paginator;
  }




  constructor(public dialog: MatDialog,  public apiService: ApiService) { 
  this.get_brands(5, 0, false);
  }


  openDialog(label: string, id: any){
    this.dialog.open(AddBrandComponent, {
      data:{label: `${label}`, id: id}
    });
  }

  openDeleteDialog(label:string, id:number){
    this.dialog.open(DeleteBrandComponent,{
      data:{label: `${label}`, id: id}
    });
  }

  get_brands(limit:number, skip:number, isExport:boolean){
    this.brandArray=[];
    this.apiService.getBrands(limit,skip,isExport).subscribe(data=>{
      console.log(data);
      for(let element of data.response.data){
        this.brandArray.push({
          id: element.id,
          brand: element.brand ? element.brand : '',
        })
      }
      this.paginator.length = data.response.total;
      this.dataSource = new MatTableDataSource<Brands>(this.brandArray);
      this.showSpinner=false;  
      
    });
  
  }

  
  delete_brand(id:any){
    this.openDeleteDialog("brand", id);
  }

  pageChanged(event: any) {
    this.showSpinner=true;
    this.limit=event.pageSize;
    this.pageIndex=event.pageIndex;
    this.get_brands(event.pageSize,  event.pageSize * event.pageIndex, false);
  }
  ngOnInit(): void {
  
  }

}
function DeleteComponent(DeleteComponent: any, arg1: { data: { label: string; id: number; }; }) {
  throw new Error('Function not implemented.');
}

