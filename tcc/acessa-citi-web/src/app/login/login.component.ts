import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  

  constructor(private formCreateEdit: FormBuilder) { }

  ngOnInit() {
  }

    loginFormControl = this.formCreateEdit.group({
        loginCtrl: [null, Validators.required],
        passwordCtrl: [null, Validators.required]
    });
  

  onLoginSubmit(){
    alert('Logado')
  }

}
