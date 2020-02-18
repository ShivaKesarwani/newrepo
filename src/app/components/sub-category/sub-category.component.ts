import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CATEGORY } from '../../constants/common';
import { SubcategoryService } from '../../services/subcategory.service';
import { LoaderService } from '../../services/loader.service';
import { ToasterService } from '../../services/toaster.service';
declare var $;

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.css']
})
export class SubCategoryComponent implements OnInit {
  statuses:object;
  subCategoryList: object[];
  currPage: number;
  sNo: number;
  searchObject = {
  	name: '',
  	id: '',
  	parent: '',
  	status: 'All'
  };
  hidingCategory:object;
  totalItems: number;
  constructor(private router:Router, private subCategoryService:SubcategoryService, private loader:LoaderService,
    private toastr:ToasterService) {
    this.statuses = CATEGORY.STATUS
  }

  ngOnInit() {
  	this.currPage = 1;
  	this.getSubCategoryList({ body: {} });
  }

  getSubCategoryList(options) {
  	this.loader.startLoader()
    const pageNumber = options.currPage || this.currPage
    const params = `?pageNumber=${pageNumber}&pageSize=10`
    this.subCategoryService.getCategoryList(params, options.body).subscribe(data => {
      this.loader.stopLoader()
      if(data.status==200) {
        this.currPage = data.data.pagination.currentPage
        this.sNo = (this.currPage-1) * 10;
        this.totalItems = data.data.pagination.totalCount
        this.subCategoryList = data.data.responseData
      } else {
        this.toastr.showError(data.message)
      }
    })
  }

  async searchUser() {
  	this.getSubCategoryList({ body: this.searchObject, currPage:1 })
  }

  openModal(id,category) {
  	this.hidingCategory = category
  	$(id).modal('show')
  }

  hideCategory() {
  	console.log('Blocking userid is', this.hidingCategory)
    $('#exampleModalCenter').modal('hide')
  }

}
