import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoaderService } from '../../services/loader.service';
import { ToasterService } from '../../services/toaster.service';
import { SubcategoryService } from '../../services/subcategory.service';

@Component({
  selector: 'app-add-editsub-category',
  templateUrl: './add-editsub-category.component.html',
  styleUrls: ['./add-editsub-category.component.css']
})
export class AddEditsubCategoryComponent implements OnInit {
  subCategoryid: any;
  subCategoryDetails: object;
  subCategoryForm: FormGroup;
  parentCategoryList: object[];
  constructor(private route:ActivatedRoute, private router:Router, private toaster:ToasterService,
    private loader:LoaderService, private subCategory:SubcategoryService) {
  	this.subCategoryid = this.route.snapshot.params.id
  }

  ngOnInit() {
  	this.initializeSubCategoryForm()
  	if(this.subCategoryid!=0) {
  	  this.getSubCategoryDetails(this.subCategoryid)
  	}
    this.getParentCategories()
  }

  initializeSubCategoryForm() {
  	this.subCategoryForm = new FormGroup({
  	  categoryName: new FormControl('',Validators.required),
  	  categoryNameArabic: new FormControl('', Validators.required),
  	  subCategoryName: new FormControl('',Validators.required),
  	  subCategoryNameArabic: new FormControl('', Validators.required),
  	  description: new FormControl('', Validators.required),
  	  descriptionArabic: new FormControl('', Validators.required),
  	  slug: new FormControl('', Validators.required),
  	  slugArabic: new FormControl('', Validators.required)
  	})
  }

  get categoryName() { return this.subCategoryForm.get('categoryName'); }
  get categoryNameArabic() { return this.subCategoryForm.get('categoryNameArabic'); }
  get subCategoryName() { return this.subCategoryForm.get('subCategoryName'); }
  get subCategoryNameArabic() { return this.subCategoryForm.get('subCategoryNameArabic'); }
  get description() { return this.subCategoryForm.get('description'); }
  get descriptionArabic() { return this.subCategoryForm.get('descriptionArabic'); }
  get slug() { return this.subCategoryForm.get('slug'); }
  get slugArabic() { return this.subCategoryForm.get('slugArabic'); }

  getSubCategoryDetails(id) {
    this.loader.startLoader()
    this.subCategory.viewSubCategory(id).subscribe(data => {
      this.loader.stopLoader()
      if(data.status==200) {
        const result = data.data.responseData
        this.subCategoryForm.patchValue({
          categoryName: result.parentCategoryId,
          categoryNameArabic: result.parentCategoryName,
          subCategoryName: result.categoryName.split(',')[0],
          subCategoryNameArabic: result.categoryName.split(',')[1],
          slug: result.categorySlug.split(',')[0],
          slugArabic: result.categorySlug.split(',')[1],
          description: result.categoryDesc.split(',')[0],
          descriptionArabic: result.categoryDesc.split(',')[1]
        })    
      } else {
        this.toaster.showError(data.message)
      }
    })
  }

  addSubCategory() {
    const body = {
      parentCategoryId: parseInt(this.subCategoryForm.value.categoryName),
      categoryName: `${this.subCategoryForm.value.subCategoryName},${this.subCategoryForm.value.subCategoryNameArabic}`,
      categoryDesc: `${this.subCategoryForm.value.description},${this.subCategoryForm.value.descriptionArabic}`,
      categorySlug: `${this.subCategoryForm.value.slug},${this.subCategoryForm.value.slugArabic}`,
      createdBy: 1
    }
  	this.loader.startLoader()
    this.subCategory.addNewSubCategory(body).subscribe(data => {
      this.loader.stopLoader()
      if(data.status=200) {
        this.toaster.showSuccess(data.message)
        this.router.navigate(['/subcategories'])    
      }else {
        this.toaster.showError(data.message)
      }
    })
  }

  getParentCategories() {
    this.loader.startLoader()
    this.subCategory.getParentcategory().subscribe(data => {
      this.loader.stopLoader()
      if(data.status==200) {
        this.parentCategoryList = data.data.responseData
      }else {
        this.toaster.showError(data.message)
      }
    })
  }

  editSubCategory() {
    const body = {
      parentCategoryId: parseInt(this.subCategoryForm.value.categoryName),
      categoryName: `${this.subCategoryForm.value.subCategoryName},${this.subCategoryForm.value.subCategoryNameArabic}`,
      categoryDesc: `${this.subCategoryForm.value.description},${this.subCategoryForm.value.descriptionArabic}`,
      categorySlug: `${this.subCategoryForm.value.slug},${this.subCategoryForm.value.slugArabic}`,
      updatedBy: 1,
      categoryId: parseInt(this.subCategoryid)
    }
    this.loader.startLoader()
    this.subCategory.editSubCategory(body).subscribe(data => {
      this.loader.stopLoader()
      if(data.status=200) {
        this.toaster.showSuccess(data.message)
        this.router.navigate(['/subcategories'])    
      }else {
        this.toaster.showError(data.message)
      }
    })
  }

}
