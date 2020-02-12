import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import {Router} from "@angular/router";
import { LoginService } from '../../services/login.service';
import { ToasterService } from '../../services/toaster.service';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private router: Router, private loginService:LoginService, private toastr:ToasterService,
    private loader:LoaderService) { 
  	
  }

  ngOnInit() {
  	this.initializeLoginForm()
  }

  initializeLoginForm() {
   this.loginForm = new FormGroup({
      emailid: new FormControl('', Validators.compose([Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"+-]+(\.[^<>()[\]\\.,;:\s@\"+-]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)])),
      password: new FormControl('', Validators.compose([Validators.required, Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/)])),
      rememberMe: new FormControl(false)
    }); 
  }

  get emailid() { return this.loginForm.get('emailid'); }
  get password() { return this.loginForm.get('password'); }

  submitLoginForm() {
    this.loader.startLoader()
    this.loginService.login(this.loginForm.value).subscribe(data => {
      this.loader.stopLoader()
      if(data.status==200) {
        localStorage.setItem('access_token', data.access_token)
        this.toastr.showSuccess(data.message)
        this.router.navigate(['/dashboard'])
      } else {
        this.toastr.showError(data.message)
      }
    })    
  }

}
