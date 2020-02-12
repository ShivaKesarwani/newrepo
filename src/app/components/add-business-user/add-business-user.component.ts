import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-business-user',
  templateUrl: './add-business-user.component.html',
  styleUrls: ['./add-business-user.component.css']
})
export class AddBusinessUserComponent implements OnInit {
  businessUserForm: FormGroup
  constructor(private router:Router) { }

  ngOnInit() {
  	this.initializeForm()
  }

  initializeForm() {
  	this.businessUserForm = new FormGroup({
  	  name: new FormControl('',Validators.compose([Validators.required,Validators.pattern(/^[a-zA-Z\s]*$/)])),
  	  nameArabic: new FormControl('', Validators.required),
  	  email: new FormControl('', Validators.compose([Validators.required,Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"+-]+(\.[^<>()[\]\\.,;:\s@\"+-]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)])),
  	  emailArabic: new FormControl('',Validators.required),
  	  mobile: new FormControl('',Validators.compose([Validators.required, Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/)])),
  	  mobileArabic: new FormControl('', Validators.required),
  	  compName: new FormControl('',Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)])),
  	  compNameArabic: new FormControl('', Validators.required),
  	  userType: new FormControl('',Validators.compose([Validators.required,Validators.pattern(/^[a-zA-Z\s]*$/)])),
  	  userTypeArabic: new FormControl('',Validators.required)
  	})
  }

  addUser() {
  	console.log('user form value is ', this.businessUserForm.value)
  	console.log('validity is ', this.businessUserForm.valid)
  }

}
