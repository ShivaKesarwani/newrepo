import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoryService } from '../../services/category.service';
import { LoaderService } from '../../services/loader.service';
import { ToasterService } from '../../services/toaster.service';

@Component({
  selector: 'app-add-edit-category',
  templateUrl: './add-edit-category.component.html',
  styleUrls: ['./add-edit-category.component.css']
})
export class AddEditCategoryComponent implements OnInit {
  categoryForm: FormGroup;
  categoryid: any;
  createdBy: number;
  constructor(private route:ActivatedRoute, private router:Router, private loader:LoaderService,
    private toaster:ToasterService, private category:CategoryService) {
  	this.categoryid = this.route.snapshot.params.id
  }

  ngOnInit() {
  	this.initializeForm()
  	if(this.categoryid!=0) {
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

  get categoryName() { return this.categoryForm.get('categoryName'); }
  get categoryNameArabic() { return this.categoryForm.get('categoryNameArabic'); }
  get slug() { return this.categoryForm.get('slug'); }
  get slugArabic() { return this.categoryForm.get('slugArabic'); }

  getCategoryDetails(id) {
    this.loader.startLoader()
    this.category.viewCategory(id).subscribe(data => {
      this.loader.stopLoader()
      if(data.status==200) {
        const result = data.data.responseData
        this.categoryForm.patchValue({
          categoryName: result.categoryName.split(',')[0],
          categoryNameArabic: result.categoryName.split(',')[1],
          slug: result.categorySlug.split(',')[0],
          slugArabic: result.categorySlug.split(',')[1]
        })
        this.createdBy = result.createdBy
      } else {
        this.toaster.showError(data.message)
      }
    })
  }

  addNewCategory() {
    const body = {
      categoryName: this.categoryForm.value.categoryName + ',' + this.categoryForm.value.categoryNameArabic,
      categorySlug: this.categoryForm.value.slug + ',' + this.categoryForm.value.slugArabic,
      createdBy: 1
    }
    this.loader.startLoader()
    this.category.addNewCategory(body).subscribe(data => {
      this.loader.stopLoader()
      if(data.status==200) {
        this.toaster.showSuccess(data.message)
        this.router.navigate(['/category'])
      } else {
        this.toaster.showError(data.message)
      }
    })
  }

  editCategory() {
    const body = {
      categoryName: this.categoryForm.value.categoryName + ',' + this.categoryForm.value.categoryNameArabic,
      categorySlug: this.categoryForm.value.slug + ',' + this.categoryForm.value.slugArabic,
      createdBy: this.createdBy,
      categoryId: this.categoryid
    }
    body.categoryId = parseInt(body.categoryId)
    this.loader.startLoader()
    this.category.editCategory(body).subscribe(data => {
      this.loader.stopLoader()
      if(data.status==200) {
        this.toaster.showSuccess(data.message)
        this.router.navigate(['/category'])
      } else {
        this.toaster.showError(data.message)
      }
    }) 
  }

}
