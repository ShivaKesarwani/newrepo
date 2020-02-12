import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewsub-category',
  templateUrl: './viewsub-category.component.html',
  styleUrls: ['./viewsub-category.component.css']
})
export class ViewsubCategoryComponent implements OnInit {
  subCategoryid: number;
  subCategoryDetails: object;
  constructor(private route:ActivatedRoute) {
  	this.subCategoryid = this.route.snapshot.params.id
  }

  ngOnInit() {
  	this.getSubCategoryDetails(this.subCategoryid)
  }

  getSubCategoryDetails(id) {
  	this.subCategoryDetails = {
  	  categoryName: 'Food',
  	  categoryNameArabic: 'Food',
  	  subCategoryName: 'Vegetables',
  	  subCategoryNameArabic: 'Vegetables',
  	  description: 'Fresh vegetables available here',
  	  descriptionArabic: 'Fresh vegetables available here',
  	  slug: '/user',
  	  slugArabic: '/user'
  	}
  }

  goBack() {
  	window.history.back()
  }

}
