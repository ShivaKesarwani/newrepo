import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from '../../services/loader.service';
import { ToasterService } from '../../services/toaster.service';
import { OrderService } from '../../services/order.service';
import { USER, ORDER } from '../../constants/common';
declare var $;

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  userType = USER.TYPE;
  orderType = ORDER.TYPE;
  orderStatus = ORDER.STATUS;
  currPage: number;
  sNo: number;
  searchObject = {
  	orderId: '',
  	userId: '',
  	userTypeId: '0',
  	orderType: '0',
  	orderStatus: '0'
  };
  totalItems: number;
  orderList: object[];
  constructor(private router:Router, private orderService:OrderService, private loader:LoaderService,
    private toastr:ToasterService) { }

  ngOnInit() {
  	this.currPage = 1;
  	this.getOrderList({ body: {} });
  }

  getOrderList(options) {
  	this.loader.startLoader()
    const pageNumber = options.currPage || this.currPage
    const params = `?pageNumber=${pageNumber}&pageSize=10`
    this.orderService.getOrderList(params, options.body).subscribe(data => {
      this.loader.stopLoader()
      if(data.status==200) {
        this.currPage = data.data.pagination.currentPage
        this.sNo = (this.currPage-1) * 10;
        this.totalItems = data.data.pagination.totalCount
        this.orderList = data.data.responseData
      } else {
        this.toastr.showError(data.message)
      }
    })
  }

  searchUser() {
  	this.getOrderList({ body: this.searchObject, currPage:1 })
  }

  openOrderModal() {
  	$('#order').modal('show')
  }

}
