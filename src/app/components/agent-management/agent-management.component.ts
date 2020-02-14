import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { USER } from '../../constants/common';
import { AgentService } from '../../services/agent.service';
import { LoaderService } from '../../services/loader.service';
import { ToasterService } from '../../services/toaster.service';
declare var $;

@Component({
  selector: 'app-agent-management',
  templateUrl: './agent-management.component.html',
  styleUrls: ['./agent-management.component.css']
})
export class AgentManagementComponent implements OnInit {
  searchObject = {
  	name: '',
  	organization: '',
  	email: '',
  	vat: '',
  	loginDate: '',
  	status: 'All'
  };
  agentList: object[]; 
  currPage: number;
  sNo: number;
  totalItems: number;
  blockingAgent = {};
  statuses = Object.values(USER.STATUS);
  agentStatus: object;
  constructor(private router:Router, private agent:AgentService, private loader:LoaderService,
    private toastr:ToasterService) {
  	this.agentStatus = USER.STATUS
  }

  ngOnInit() {
    this.currPage = 1
  	this.getAgentList({});
  }

  getAgentList(options) {
    this.loader.startLoader()
    const pageNumber = options.currPage || this.currPage
    const params = `?pageNumber=${pageNumber}&pageSize=10`
    this.agent.getAgentList(params, {}).subscribe(data => {
      this.loader.stopLoader()
      if(data.status==200) {
        this.currPage = data.data.pagination.currentPage
        this.sNo = (this.currPage-1) * 10;
        this.totalItems = data.data.pagination.totalCount
        this.agentList = data.data.responseData
      } else {
        this.toastr.showError(data.message)
      }
    })
  }

  async searchUser(type) {
  	let search = ''
  	switch (type) {
  		case "name":
  		  search = this.searchObject.name
  		  break
  		case "organization":
  		  search = this.searchObject.organization
  		  break
  		case "email":
  		  search = this.searchObject.email
  		  break
  		case "vat":
  		  search = this.searchObject.vat
  		  break
  		case "login":
  		  search = this.searchObject.loginDate
  		  break
  		case "status":
  		  search = this.searchObject.status
  		  break
  		default:
  		  search = ''
  		  break;
  	}
  	this.getAgentList(search)
  }

  openModal(id,agent) {
  	this.blockingAgent = agent
  	$(id).modal('show')
  }

  blockAgent() {
  	console.log('Blocking userid is', this.blockingAgent)
    $('#exampleModalCenter').modal('hide')
  }

  goToUser() {
    this.router.navigate(['/addAgent'])
  }

}
