import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../services/category.service';
import { LoaderService } from '../../services/loader.service';
import { ToasterService } from '../../services/toaster.service';

@Component({
  selector: 'app-viewsub-category',
  templateUrl: './viewsub-category.component.html',
  styleUrls: ['./viewsub-category.component.css']
})
export class ViewsubCategoryComponent implements OnInit {
  subCategoryid: number;
  subCategoryDetails: object;
  constructor(private route:ActivatedRoute, private category:CategoryService, private toaster:ToasterService,
    private loader:LoaderService) {
  	this.subCategoryid = this.route.snapshot.params.id
  }

  ngOnInit() {
  	this.getSubCategoryDetails(this.subCategoryid)
  }

  getSubCategoryDetails(id) {
    this.loader.startLoader()
    this.category.viewCategory(id).subscribe(data => {
      this.loader.stopLoader()
      if(data.status==200) {
        const result = data.data.responseData
        this.subCategoryDetails = {
          categoryName: result.parentCategoryName && result.parentCategoryName.split(',')[0],
          categoryNameArabic: result.parentCategoryName && result.parentCategoryName.split(',')[1],
          subCategoryName: result.categoryName.split(',')[0],
          subCategoryNameArabic: result.categoryName.split(',')[1],
          slug: result.categorySlug.split(',')[0],
          slugArabic: result.categorySlug.split(',')[1],
          description: result.categoryDesc.split(',')[0],
          descriptionArabic: result.categoryDesc.split(',')[1]
        }     
      } else {
        this.toaster.showError(data.message)
      }
    })
  }

  goBack() {
  	window.history.back()
  }

}
