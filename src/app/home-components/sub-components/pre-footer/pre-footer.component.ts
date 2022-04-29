import { Component, OnInit } from '@angular/core';
import {faShield}  from '@fortawesome/free-solid-svg-icons'
import {faWarehouse}  from '@fortawesome/free-solid-svg-icons'
import {faShippingFast}  from '@fortawesome/free-solid-svg-icons'
import {faUserShield}  from '@fortawesome/free-solid-svg-icons'
import {faHeadset}  from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-pre-footer',
  templateUrl: './pre-footer.component.html',
  styleUrls: ['./pre-footer.component.css']
})
export class PreFooterComponent implements OnInit {
  faShield =faShield
  faWarehouse=faWarehouse
  faShippingFast=faShippingFast
  faUserShield=faUserShield
  faHeadset=faHeadset
  constructor() { }

  ngOnInit(): void {
  }

}
