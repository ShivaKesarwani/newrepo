import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent implements OnInit {
  categoryid: number
  categoryDetails: object
  constructor(private route:ActivatedRoute) {
  	this.categoryid = this.route.snapshot.params.id
  }

  ngOnInit() {
  	this.getCategoryDetails(this.categoryid)
  }

  getCategoryDetails(id) {
  	this.categoryDetails = {
  	  categoryName: 'Food',
  	  categoryNameArabic: 'Food',
  	  slug: '/user',
  	  slugArabic: '/user'
  	}
  }

  goBack() {
  	window.history.back()
  }

}
