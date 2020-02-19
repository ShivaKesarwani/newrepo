import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CATEGORY } from '../../constants/common';
import { CategoryService } from '../../services/category.service';
import { LoaderService } from '../../services/loader.service';
import { ToasterService } from '../../services/toaster.service';
declare var $;

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  statuses: object
  categoryList: object[];
  currPage: number;
  sNo: number;
  searchObject = {
  	categoryName: '',
  	categoryId: '',
  	status: ''
  };
  hidingCategory: object
  totalItems: number;
  constructor(private router:Router, private categoryService:CategoryService, private loader:LoaderService,
    private toastr:ToasterService) {
    this.statuses = CATEGORY.STATUS
  }

  ngOnInit() {
  	this.currPage = 1;
  	this.getCategoryList({ body: {} });
  }

  getCategoryList(options) {
  	this.loader.startLoader()
    const pageNumber = options.currPage || this.currPage
    const params = `?pageNumber=${pageNumber}&pageSize=10`
    this.categoryService.getCategoryList(params, options.body).subscribe(data => {
      this.loader.stopLoader()
      if(data.status==200) {
        this.currPage = data.data.pagination.currentPage
        this.sNo = (this.currPage-1) * 10;
        this.totalItems = data.data.pagination.totalCount
        this.categoryList = data.data.responseData
      } else {
        this.toastr.showError(data.message)
      }
    })
  }

  searchUser() {
  	this.getCategoryList({ body: this.searchObject, currPage:1 })
  }

  openModal(id,category) {
  	this.hidingCategory = category
  	$(id).modal('show')
  }

  hideCategory() {
    const params = `?categoryId=${this.hidingCategory['categoryId']}&visible=${this.hidingCategory['status']==4 ? false : true}`
  	this.loader.startLoader()
    this.categoryService.hideCategory(params).subscribe(data => {
      this.loader.stopLoader()
      if(data.status=200) {
        $('#exampleModalCenter').modal('hide')
        this.getCategoryList({ currPage: this.currPage, body: this.searchObject })
      } else {
        this.toastr.showSuccess(data.message)
      }
    })
    $('#exampleModalCenter').modal('hide')
  }

  goToUser() {
    this.router.navigate(['/addAgent'])
  }
}
