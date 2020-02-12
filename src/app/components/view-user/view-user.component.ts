import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { WALLET, ORDER } from '../../constants/common';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  userDetails: object;
  userid: number;
  searchObject = {
    txnid: '',
    orderid: '',
    orderType: 'All',
    date: '',
    status: 'All'
  };
  walletDetails: object[];
  currPage: number;
  sNo: number;
  walletStatuses = Object.values(WALLET.STATUS)
  orderTypes = Object.values(ORDER.TYPE)
  constructor(private route: ActivatedRoute, private router:Router) { }

  async ngOnInit() {
  	this.userid = this.route.snapshot.params.id
  	await Promise.all([
      this.getUserDetails(this.userid),
      this.getWalletDetails(this.userid)
    ])
  }

  async getUserDetails(id) {
  	this.userDetails = {
  		name: 'Shiva Kesarwani',
  		userType: 'Individual User',
  		email: 'shiva68kesarwani@gmail.com',
  		userid: 1,
      mobile: '+917890650987',
      balance: '$1000',
      orders: 10,
      image: ''
  	} 
  }

  async getWalletDetails(id) {
    this.currPage = 1;
    this.sNo = (this.currPage-1) * 10;
    this.walletDetails = [
      {
        txnid: 1001,
        orderid: 9001,
        orderType: 'New',
        amount: 1000,
        extra: 0.00,
        total: 50.16,
        date: '14/01/2019',
        walletStatus: 'Balance Added',
        walletId: 1
      },
      {
        txnid: 1002,
        orderid: 9002,
        orderType: 'Reprint',
        amount: 5000,
        extra: 0.00,
        total: 35.90,
        date: '15/10/2019',
        walletStatus: 'Balance Deducted',
        walletId: 2
      }
    ]
  }

  goBack() {
  	window.history.back()
  }

  goToBalanceAddOrDeductPage(type) {
    this.router.navigate(['/addBalance/'+this.userid+'/'+type])
  }

}
