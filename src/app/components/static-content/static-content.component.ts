import { Component, OnInit } from '@angular/core';
import { STATIC_CONTENT_PAGE_TYPES } from '../../constants/common';

@Component({
  selector: 'app-static-content',
  templateUrl: './static-content.component.html',
  styleUrls: ['./static-content.component.css']
})
export class StaticContentComponent implements OnInit {
  pageTypes: string[];
  constructor() { }

  ngOnInit() {
  	this.pageTypes = STATIC_CONTENT_PAGE_TYPES
  }

}
