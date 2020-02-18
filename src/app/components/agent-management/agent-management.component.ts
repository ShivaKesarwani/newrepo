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
  	agentName: '',
  	organization: '',
  	agentEmailId: '',
  	commercialRegistrationNo: '',
  	loginDate: '',
  	status: ''
  };
  agentList: object[]; 
  currPage: number;
  sNo: number;
  totalItems: number;
  blockingAgent = {};
  agentStatus: object;
  constructor(private router:Router, private agent:AgentService, private loader:LoaderService,
    private toastr:ToasterService) {
  	this.agentStatus = USER.STATUS
  }

  ngOnInit() {
    this.currPage = 1
  	this.getAgentList({ body: {} });
  }

  getAgentList(options) {
    this.loader.startLoader()
    const pageNumber = options.currPage || this.currPage
    const params = `?pageNumber=${pageNumber}&pageSize=10`
    this.agent.getAgentList(params, options.body).subscribe(data => {
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

  async searchUser() {
  	this.getAgentList({ body: this.searchObject, currPage:1 })
  }

  openModal(id,agent) {
  	this.blockingAgent = agent
  	$(id).modal('show')
  }

  blockAgent() {
  	console.log('Blocking userid is', this.blockingAgent)
    $('#exampleModalCenter').modal('hide')
  }

  goToAgent() {
    this.router.navigate(['/addAgent/0'])
  }

}
