import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxUiLoaderModule } from  'ngx-ui-loader';

//Service
import { LoginService } from './services/login.service';
import { ToasterService } from './services/toaster.service';
import { AuthSecurity } from './security/auth.security';
import { UserService } from './services/user.service';
import { AgentService } from './services/agent.service';
import { CategoryService } from './services/category.service';
import { LoaderService } from './services/loader.service';
import { SubcategoryService } from './services/subcategory.service';

//Components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { ViewUserComponent } from './components/view-user/view-user.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddWalletBalanceComponent } from './components/add-wallet-balance/add-wallet-balance.component';
import { AddBusinessUserComponent } from './components/add-business-user/add-business-user.component';
import { AgentManagementComponent } from './components/agent-management/agent-management.component';
import { CategoryComponent } from './components/category/category.component';
import { ViewCategoryComponent } from './components/view-category/view-category.component';
import { AddEditCategoryComponent } from './components/add-edit-category/add-edit-category.component';
import { SubCategoryComponent } from './components/sub-category/sub-category.component';
import { ViewsubCategoryComponent } from './components/viewsub-category/viewsub-category.component';
import { AddEditsubCategoryComponent } from './components/add-editsub-category/add-editsub-category.component';
import { StaticContentComponent } from './components/static-content/static-content.component';
import { StaticContentTypesComponent } from './components/static-content-types/static-content-types.component';
import { AddAgentComponent } from './components/add-agent/add-agent.component';
import { ViewAgentComponent } from './components/view-agent/view-agent.component';
import { OrderComponent } from './components/order/order.component';
import { ViewOrderComponent } from './components/view-order/view-order.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent,
    UserManagementComponent,
    ViewUserComponent,
    DashboardComponent,
    AddWalletBalanceComponent,
    AddBusinessUserComponent,
    AgentManagementComponent,
    CategoryComponent,
    ViewCategoryComponent,
    AddEditCategoryComponent,
    SubCategoryComponent,
    ViewsubCategoryComponent,
    AddEditsubCategoryComponent,
    StaticContentComponent,
    StaticContentTypesComponent,
    AddAgentComponent,
    ViewAgentComponent,
    OrderComponent,
    ViewOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-bottom-left',
      preventDuplicates: true,
    }),
    BrowserAnimationsModule,
    NgxUiLoaderModule
  ],
  providers: [LoginService,ToasterService,AuthSecurity,CategoryService,AgentService,UserService,LoaderService,
    SubcategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
