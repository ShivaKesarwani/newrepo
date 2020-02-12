import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CATEGORY } from '../../constants/common';
declare var $;

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  statuses = Object.values(CATEGORY.STATUS)
  categoryList: object[];
  currPage: number;
  sNo: number;
  searchObject = {
  	name: '',
  	id: '',
  	status: 'All'
  };
  hidingCategory = {}
  constructor(private router:Router) {}

  ngOnInit() {
  	this.currPage = 1;
  	this.sNo = (this.currPage-1) * 10;
  	this.getCategoryList('');
  }

  getCategoryList(search) {
  	this.categoryList = [
  	  {
  	  	categoryid: 1,
  	  	categoryName: 'Food',
  	  	status: 'Active'
  	  },
  	  {
  	  	categoryid: 2,
  	  	categoryName: 'Drinks',
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
  		default:
  		  search = ''
  		  break;
  	}
  	this.getCategoryList(search)
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
