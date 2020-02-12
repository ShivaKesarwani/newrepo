import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-static-content-types',
  templateUrl: './static-content-types.component.html',
  styleUrls: ['./static-content-types.component.css']
})
export class StaticContentTypesComponent implements OnInit {
  type: string;
  staticForm: FormGroup
  constructor(private route:ActivatedRoute, private router:Router) {
  	this.type = this.route.snapshot.params.type
  	if(!this.type) {
  	  this.router.navigate(['/staticContent'])	
  	}
  }

  ngOnInit() {
  	this.initializeForm()
  	this.getStaticContent()
  }

  initializeForm() {
  	this.staticForm = new FormGroup({
  	  title: new FormControl({value:'', disabled: true}, Validators.required,),
  	  content: new FormControl('', Validators.required)
  	})
  }

  getStaticContent() {
  	this.staticForm.patchValue({
  	  title: this.type,
  	  content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
  	    Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor.
  	    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum,
  	    nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget`
  	})
  }

  saveContent() {
  	console.log('Static form is ', this.staticForm.value)
  	this.router.navigate(['/staticContent'])
  }

}
