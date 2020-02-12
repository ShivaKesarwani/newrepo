import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-editsub-category',
  templateUrl: './add-editsub-category.component.html',
  styleUrls: ['./add-editsub-category.component.css']
})
export class AddEditsubCategoryComponent implements OnInit {
  subCategoryid: number;
  subCategoryDetails: object;
  subCategoryForm: FormGroup;
  constructor(private route:ActivatedRoute, private router:Router) {
  	this.subCategoryid = this.route.snapshot.params.id
  }

  ngOnInit() {
  	this.initializeSubCategoryForm()
  	if(this.subCategoryid!=0) {
  	  this.getSubCategoryDetails(this.subCategoryid)
  	}
  }

  initializeSubCategoryForm() {
  	this.subCategoryForm = new FormGroup({
  	  categoryName: new FormControl('', Validators.compose([Validators.required,Validators.pattern(/^[a-zA-Z\s]*$/)])),
  	  categoryNameArabic: new FormControl('', Validators.required),
  	  subCategoryName: new FormControl('', Validators.compose([Validators.required,Validators.pattern(/^[a-zA-Z\s]*$/)])),
  	  subCategoryNameArabic: new FormControl('', Validators.required),
  	  description: new FormControl('', Validators.required),
  	  descriptionArabic: new FormControl('', Validators.required),
  	  slug: new FormControl('', Validators.required),
  	  slugArabic: new FormControl('', Validators.required)
  	})
  }

  getSubCategoryDetails(id) {
  	this.subCategoryForm.patchValue({
  	  categoryName: 'Food',
  	  categoryNameArabic: 'Food',
  	  subCategoryName: 'Vegetables',
  	  subCategoryNameArabic: 'Vegetables',
  	  description: 'Fresh vegetables available here',
  	  descriptionArabic: 'Fresh vegetables available here',
  	  slug: '/user',
  	  slugArabic: '/user'
  	})
  }

  addOrUpdateSubCategory() {
  	console.log('sub category form', this.subCategoryForm.value)
  	this.router.navigate(['/subcategories'])
  }

}
