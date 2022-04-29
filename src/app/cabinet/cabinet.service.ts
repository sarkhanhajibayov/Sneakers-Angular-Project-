import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Routes, Route, Router } from '@angular/router';
import { BaseService } from '../shared/base.service';


@Injectable({
  providedIn: 'root',
})

export class CabinetService extends BaseService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private dialog: MatDialog
  ) {
    super();
  }

  

}
