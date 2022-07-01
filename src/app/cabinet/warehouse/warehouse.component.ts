import { Component, OnInit,ViewChild} from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from '../services/api.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})
export class WarehouseComponent  {
  title = 'Crud';
  // displayedColumns: string[] = ['brand','model', 'category', 'price', 'size','date','warehouse','employee','comment','action'];
  // dataSource!: MatTableDataSource<any>;

  // @ViewChild(MatPaginator) paginator!: MatPaginator;
  // @ViewChild(MatSort) sort!: MatSort;
  // constructor(public dialog: MatDialog,private api:ApiService) {}

  ngOnInit(): void {
    // this.getAllProducts();
  }
  // openDialog(){
  //   this.dialog.open(DialogComponent,{
  //       width: '650px',
  //       height: '650px'
  //   }).afterClosed().subscribe(val=>{
  //     if(val==='save'){
  //       this.getAllProducts();
  //     }
  //   })
  // };
  // getAllProducts(){
  //   this.api.getProduct()
  //   .subscribe({
  //     next:(res)=>{
  //       this.dataSource = new MatTableDataSource(res);
  //       this.dataSource.paginator= this.paginator;
  //       this.dataSource.sort =this.sort;
  //     },
  //     error:()=>{
  //       alert ('Error')
  //     }
  //   })
  // }
  // editProduct(row:any){
  //   this.dialog.open(DialogComponent,{
  //     width: '650px',
  //       height: '650px',
  //       data: row
  //   }).afterClosed().subscribe(val=>{
  //     if(val==='update'){
  //       this.getAllProducts();
  //     }
  //   })
  // }
  // deleteProduct(id:number){
  //   this.api.deleteProduct(id)
  //   .subscribe({
  //     next:(res)=>{
  //       alert('Məhsul silindi')
  //     },
  //     error:()=>{
  //       alert('Məhsul silinməsində xəta baş verdi')
  //     }
  //   })
  // }
  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();

  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }
}



