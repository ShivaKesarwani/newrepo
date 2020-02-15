import { Component, OnInit } from '@angular/core';
import { USER } from '../../constants/common';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { LoaderService } from '../../services/loader.service';
import { ToasterService } from '../../services/toaster.service';
declare var $;

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  userList: object[]; 
  currPage: number;
  sNo: number;
  userStatus: object;
  userType: object;
  totalItems: number;
  searchObject = {
  	userId: '',
  	name: '',
  	userTypeId: '',
  	emailId: '',
  	phone: '',
  	loginDate: '',
  	businessName: '',
  	status: ''
  };
  blockingUser = {};
  constructor(private router:Router, private loader:LoaderService, private toastr:ToasterService,
    private userService:UserService) {
  	this.userStatus = USER.STATUS
    this.userType = USER.TYPE
  }

  ngOnInit() {
  	this.currPage = 1;
    this.getUserList({ body: {} })
  }

  getUserList(options) {
    this.loader.startLoader()
  	const pageNumber = options.currPage || this.currPage
    const params = `?pageNumber=${pageNumber}&pageSize=10`
    this.userService.getUserList(params,options.body).subscribe(data => {
      this.loader.stopLoader()
      if(data.status==200) {
        this.currPage = data.data.pagination.currentPage
        this.sNo = (this.currPage-1) * 10;
        this.totalItems = data.data.pagination.totalCount
        this.userList = data.data.responseData
      }else {
        this.toastr.showError(data.message)
      }
    })
  }

  searchUser(type) {
  	this.getUserList({ body: this.searchObject, currPage:1 })
  }

  openModal(id,user) {
  	this.blockingUser = user
  	$(id).modal('show')
  }

  blockUser() {
    const params = `?userId=${this.blockingUser['userId']}&block=${this.blockingUser['status']==3 ? false : true}`
  	this.loader.startLoader()
    this.userService.blockUser(params).subscribe(data => {
      this.loader.stopLoader()
      if(data.status==200) {
        this.toastr.showSuccess(data.message)
        this.getUserList({ currPage: this.currPage, body: this.searchObject })
      } else {
        this.toastr.showError(data.message)
      }
    })
    $('#exampleModalCenter').modal('hide')
  }

  goToUser() {
    this.router.navigate(['/addBusinessUser'])
  }

}
