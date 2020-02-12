import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-add-wallet-balance',
  templateUrl: './add-wallet-balance.component.html',
  styleUrls: ['./add-wallet-balance.component.css']
})
export class AddWalletBalanceComponent implements OnInit {
  userid: number
  type: string
  walletBalance: number
  constructor(private route:ActivatedRoute) {
  	this.userid = this.route.snapshot.params.id
  	this.type = this.route.snapshot.params.type
  	console.log(`userid is ${this.userid} and type is ${this.type}`)
  }

  ngOnInit() {
  	this.getBalance(this.userid)
  }

  getBalance(id) {
  	this.walletBalance = 780.00
  }

  addOrDeductBalance(type) {
  	
  }

}
