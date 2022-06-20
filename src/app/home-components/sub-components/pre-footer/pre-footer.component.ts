import { Component, OnInit } from '@angular/core';
import { faTruckFast } from '@fortawesome/free-solid-svg-icons';
import {faBox} from '@fortawesome/free-solid-svg-icons'
import {faShield} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-pre-footer',
  templateUrl: './pre-footer.component.html',
  styleUrls: ['./pre-footer.component.css']
})
export class PreFooterComponent implements OnInit {
  truckIcon = faTruckFast;
  boxIcon = faBox;
  shieldIcon = faShield;
  constructor() { }

  ngOnInit(): void {
  }

}
