import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../services/category.service';
import { LoaderService } from '../../services/loader.service';
import { ToasterService } from '../../services/toaster.service';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent implements OnInit {
  categoryid: number
  categoryDetails: object
  constructor(private route:ActivatedRoute, private category:CategoryService, private toaster:ToasterService,
    private loader:LoaderService) {
  	this.categoryid = this.route.snapshot.params.id
  }

  ngOnInit() {
  	this.getCategoryDetails(this.categoryid)
  }

  getCategoryDetails(id) {
    this.loader.startLoader()
    this.category.viewCategory(id).subscribe(data => {
      this.loader.stopLoader()
      if(data.status==200) {
        const result = data.data.responseData
        this.categoryDetails = {
          categoryName: result.categoryName.split(',')[0],
          categoryNameArabic: result.categoryName.split(',')[1],
          slug: result.categorySlug.split(',')[0],
          slugArabic: result.categorySlug.split(',')[1]
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
