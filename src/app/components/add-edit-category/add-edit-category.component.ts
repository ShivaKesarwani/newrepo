import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-add-edit-category',
  templateUrl: './add-edit-category.component.html',
  styleUrls: ['./add-edit-category.component.css']
})
export class AddEditCategoryComponent implements OnInit {
  categoryForm: FormGroup;
  categoryid: number
  constructor(private route:ActivatedRoute, private router:Router) {
  	this.categoryid = this.route.snapshot.params.id
  }

  ngOnInit() {
  	this.initializeForm()
  	if(this.categoryid!=0) {
  	  console.log(typeof this.categoryid)
  	  this.getCategoryDetails(this.categoryid)
  	}
  }

  initializeForm() {
  	this.categoryForm = new FormGroup({
  	  categoryName: new FormControl('', Validators.required),
  	  categoryNameArabic: new FormControl('', Validators.required),
  	  slug: new FormControl('', Validators.required),
  	  slugArabic: new FormControl('', Validators.required)
  	})
  }

  getCategoryDetails(id) {
  	this.categoryForm.patchValue({
  	  categoryName: 'Food',
  	  categoryNameArabic: 'Food',
  	  slug: '/users',
  	  slugArabic: '/users'
  	})
  }

}
