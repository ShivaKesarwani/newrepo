import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { LoginService } from '../../services/login.service';
import { LoaderService } from '../../services/loader.service';
import { ToasterService } from '../../services/toaster.service'

declare var $;
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  url: string;
  constructor(private router: Router,private loginService:LoginService, private loader:LoaderService,
    private toastr:ToasterService) {
  	const path = window.location.pathname.toLowerCase()
    console.log('path is', path)
  	if(path.includes('user')) this.url = 'user'
  	else if(path.includes('agent')) this.url = 'agent'
    else if(path.includes('category')) this.url = 'category'
    else if(path.includes('subcategories')) this.url = 'subcategories'
    else if(path.includes('static')) this.url = 'static'
   console.log('url is ', this.url)
  }

  ngOnInit() {
  	$("#menu-toggle").click(function(e) {
		e.preventDefault();
		$("#wrapper").toggleClass("toggled");
		$(".page-fade").addClass("backdrop");
	});
	 $("#left-menu-toggle").click(function(e) {
		e.preventDefault();
		$("#wrapper").toggleClass("toggled");
		$(".page-fade").removeClass("backdrop");
	});
	$(".page-fade").click(function(e) {
		e.preventDefault();
		$("#wrapper").toggleClass("toggled");
		$(".page-fade").removeClass("backdrop");
	});
  }

  logout() {
  	this.loader.startLoader()
    this.loginService.logout().subscribe(data => {
      this.loader.stopLoader()
      if(data.status==200) {
        localStorage.clear()
        this.router.navigate(['/login'])
      }else {
        this.toastr.showError(data.message)
      }
    })
  }

}
