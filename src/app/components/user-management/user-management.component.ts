import { Component, OnInit } from '@angular/core';
import { USER } from '../../constants/common';
import { Router } from '@angular/router'
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
  types = Object.values(USER.TYPE);
  statuses = Object.values(USER.STATUS);
  userStatus: object;
  searchObject = {
  	id: '',
  	name: '',
  	userType: 'All',
  	email: '',
  	mobile: '',
  	loginDate: '',
  	businessName: '',
  	status: 'All'
  };
  blockingUser = {};
  constructor(private router:Router) {
  	this.userStatus = USER.STATUS
  }

  ngOnInit() {
  	this.currPage = 1;
  	this.sNo = (this.currPage-1) * 10;
  	this.userList = [
	    {
	    	name: 'Shiva Kesarwani',
	    	email: 'shiva@gmail.com',
	    	createdOn: '14/01/2019',
	    	userType: 'Individual User',
	    	mobile: '+918080808080',
	    	loggedInDate: '17/01/2019',
	    	businessName: 'Caterers',
	    	status: 'Approved',
	    	userid: 1
	    },
	    {
	    	name: 'Sagar Bajaj',
	    	email: 'sagar@gmail.com',
	    	createdOn: '15/01/2019',
	    	userType: 'Business User',
	    	mobile: '+918080806789',
	    	loggedInDate: '18/01/2019',
	    	businessName: 'Bakery',
	    	status: 'Pending',
	    	userid: 2
	    },
	    {
	    	name: 'Piyoosh Kumar',
	    	email: 'piyoosh@gmail.com',
	    	createdOn: '15/01/2020',
	    	userType: 'Business User',
	    	mobile: '+918080776789',
	    	loggedInDate: '18/01/2020',
	    	businessName: 'Bakery',
	    	status: 'Blocked',
	    	userid: 3
	    }
    ]
  }

  getUserList(search) {
  	console.log('user list found')
  }

  async searchUser(type) {
  	let search = ''
  	switch (type) {
  		case "id":
  		  search = this.searchObject.id
  		  break;
  		case "name":
  		  search = this.searchObject.name
  		  break
  		case "type":
  		  search = this.searchObject.userType
  		  break
  		case "email":
  		  search = this.searchObject.email
  		  break
  		case "mobile":
  		  search = this.searchObject.mobile
  		  break
  		case "login":
  		  search = this.searchObject.loginDate
  		  break
  		case "business":
  		  search = this.searchObject.businessName
  		  break
  		case "status":
  		  search = this.searchObject.status
  		  break
  		default:
  		  search = ''
  		  break;
  	}
  	this.getUserList(search)
  }

  openModal(id,user) {
  	this.blockingUser = user
  	$(id).modal('show')
  }

  blockUser() {
  	console.log('Blocking userid is', this.blockingUser)
    $('#exampleModalCenter').modal('hide')
  }

  goToUser() {
    this.router.navigate(['/addBusinessUser'])
  }

}
