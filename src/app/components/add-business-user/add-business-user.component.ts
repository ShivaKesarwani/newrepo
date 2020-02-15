import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { LoaderService } from '../../services/loader.service';
import { ToasterService } from '../../services/toaster.service';

@Component({
  selector: 'app-add-business-user',
  templateUrl: './add-business-user.component.html',
  styleUrls: ['./add-business-user.component.css']
})
export class AddBusinessUserComponent implements OnInit {
  businessUserForm: FormGroup
  constructor(private router:Router, private loader:LoaderService, private toastr:ToasterService,
    private userService: UserService) { }

  ngOnInit() {
  	this.initializeForm()
  }

  initializeForm() {
  	this.businessUserForm = new FormGroup({
  	  name: new FormControl('',Validators.compose([Validators.required,Validators.pattern(/^[a-zA-Z\s]*$/)])),
  	  nameArabic: new FormControl('', Validators.required),
  	  emailId: new FormControl('', Validators.compose([Validators.required,
        Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"+-]+(\.[^<>()[\]\\.,;:\s@\"+-]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)])),
  	  emailIdArabic: new FormControl('',Validators.required),
  	  phone: new FormControl('',Validators.compose([Validators.required,Validators.pattern(/^[6-9]\d{9}$/)])),
  	  phoneArabic: new FormControl('', Validators.required),
  	  compName: new FormControl('',Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)])),
  	  compNameArabic: new FormControl('', Validators.required)
  	})
    console.log('before', this.businessUserForm.valid)
  }

  get name() { return this.businessUserForm.get('name'); }
  get nameArabic() { return this.businessUserForm.get('nameArabic'); }
  get emailId() { return this.businessUserForm.get('email'); }
  get emailArabic() { return this.businessUserForm.get('emailArabic'); }
  get phone() { return this.businessUserForm.get('mobile'); }
  get phoneArabic() { return this.businessUserForm.get('mobileArabic'); }
  get compName() { return this.businessUserForm.get('compName'); }
  get compNameArabic() { return this.businessUserForm.get('compNameArabic'); }

  addUser() {
    let body = {}
    body = JSON.parse(JSON.stringify(this.businessUserForm.value))
    body['userTypeId'] = 1
    body['status'] = 1
    body['createdAt'] =1
    body['name'] = body['name'] + ',' + body['nameArabic']
    body['businessName'] = 'Business User,Business User'
  	this.loader.startLoader();
    this.userService.addBusinessUser(body).subscribe(data => {
      console.log('data is ',data)
      this.loader.stopLoader()
      if(data.status==200) {
        this.toastr.showSuccess(data.message)
        this.router.navigate(['/user'])
      }else {
        this.toastr.showError(data.message)
      }
    })
  }

}
