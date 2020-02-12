import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CATEGORY } from '../../constants/common';
declare var $;

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.css']
})
export class SubCategoryComponent implements OnInit {
  statuses = Object.values(CATEGORY.STATUS)
  subCategoryList: object[];
  currPage: number;
  sNo: number;
  searchObject = {
  	name: '',
  	id: '',
  	parent: '',
  	status: 'All'
  };
  hidingCategory = {}
  constructor(private router:Router) { }

  ngOnInit() {
  	this.currPage = 1;
  	this.sNo = (this.currPage-1) * 10;
  	this.getSubCategoryList('');
  }

  getSubCategoryList(search) {
  	this.subCategoryList = [
  	  {
  	  	subCategoryid: 1,
  	  	subCategoryName: 'Vegetables',
  	  	parent: 'Food',
  	  	status: 'Active'
  	  },
  	  {
  	  	subCategoryid: 2,
  	  	subCategoryName: 'Beer',
  	  	parent: 'Drink',
  	  	status: 'Hidden'
  	  }
  	]
  }

  async searchUser(type) {
  	let search = ''
  	switch (type) {
  		case "name":
  		  search = this.searchObject.name
  		  break
  		case "id":
  		  search = this.searchObject.id
  		  break
  		case "status":
  		  search = this.searchObject.status
  		  break
  		case "parent":
  		  search = this.searchObject.parent
  		  break
  		default:
  		  search = ''
  		  break;
  	}
  	this.getSubCategoryList(search)
  }

  openModal(id,category) {
  	this.hidingCategory = category
  	$(id).modal('show')
  }

  hideCategory() {
  	console.log('Blocking userid is', this.hidingCategory)
    $('#exampleModalCenter').modal('hide')
  }

  goToUser() {
    this.router.navigate(['/addAgent'])
  }

}
