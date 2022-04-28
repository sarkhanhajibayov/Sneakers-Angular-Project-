import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { faKey } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
faKey=faKey
faUser=faUser
hide = true;
  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    
  }
}
