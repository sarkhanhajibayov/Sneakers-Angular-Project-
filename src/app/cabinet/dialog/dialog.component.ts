import { Component, OnInit,Inject } from '@angular/core';
import { FormGroup,Validators,FormBuilder } from '@angular/forms';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  anbarList=['Suraxanı','Nərimanov','Əhmədli','Sumqayıt']
productionForm !: FormGroup
actionBtn : string = 'Yadda saxla'
  constructor( public fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private api :ApiService,
    private dialogRef:MatDialogRef<DialogComponent>) { }

  ngOnInit(): void {
    this.productionForm=this.fb.group({
      brand: ['',Validators.required],
      category: ['',Validators.required],
      model: ['',Validators.required],
      size: ['',Validators.required],
      price: ['',Validators.required],
      amount: ['',Validators.required],
      employee: ['',Validators.required],
      date:['',Validators.required],
      warehouse:['',Validators.required],
      comment: ['',Validators.required]
    })
  
  }
  addProduct(){
    if(!this.editData){
      if (this.productionForm.valid){
        this.api.postProduct(this.productionForm.value)
        .subscribe({
          next:(res)=>{
            alert('Məhsul əlavə olundu')
            this.productionForm.reset();
            this.dialogRef.close('save');
          },error:()=>{
            alert('Xəta baş verdi')
          }
        })
      }}else{
        this.updateProduct()
      }
    }
    updateProduct(){
      this.api.putProduct(this.productionForm.value,this.editData.id)
      .subscribe({
        next:(res)=>{
          alert('Məhsul yeniləndi');
          this.productionForm.reset()
          this.dialogRef.close('update')
        },
        error:()=>{
          alert('Xəta baş verdi')
        }
      })
    }
}
