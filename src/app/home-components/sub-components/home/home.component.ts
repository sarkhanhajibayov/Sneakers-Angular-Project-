import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { faKey } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
faKey=faKey
faUser=faUser
hide = true;
  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    
  }
}
