import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthSecurity } from './security/auth.security';

//Components
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { ViewUserComponent } from './components/view-user/view-user.component';
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

const routes: Routes = [
  { 'path': '', 'redirectTo': '/login', 'pathMatch': 'full' },
  { 'path': 'login', component: LoginComponent },
  { 'path': 'dashboard', component: DashboardComponent, canActivate:[AuthSecurity] },
  { 'path': 'user', component: UserManagementComponent, canActivate:[AuthSecurity] },
  { 'path': 'userDetails/:id', component: ViewUserComponent, canActivate:[AuthSecurity] },
  { 'path': 'addBalance/:id/:type', component: AddWalletBalanceComponent, canActivate:[AuthSecurity] },
  { 'path': 'addBusinessUser', component: AddBusinessUserComponent, canActivate:[AuthSecurity] },
  { 'path': 'agent', component: AgentManagementComponent, canActivate:[AuthSecurity] },
  { 'path': 'category', component: CategoryComponent, canActivate:[AuthSecurity] },
  { 'path': 'viewCategory/:id', component: ViewCategoryComponent, canActivate:[AuthSecurity] },
  { 'path': 'addEditCategory/:id', component: AddEditCategoryComponent, canActivate:[AuthSecurity] },
  { 'path': 'category', component: CategoryComponent, canActivate:[AuthSecurity] },
  { 'path': 'viewCategory/:id', component: ViewCategoryComponent, canActivate:[AuthSecurity] },
  { 'path': 'addEditCategory/:id', component: AddEditCategoryComponent, canActivate:[AuthSecurity] },
  { 'path': 'subcategories', component: SubCategoryComponent, canActivate:[AuthSecurity] },
  { 'path': 'viewSubCategories/:id', component: ViewsubCategoryComponent, canActivate:[AuthSecurity] },
  { 'path': 'addEditCategories/:id', component: AddEditsubCategoryComponent, canActivate:[AuthSecurity] },
  { 'path': 'staticContent', component: StaticContentComponent, canActivate:[AuthSecurity] },
  { 'path': 'staticContentType/:type', component: StaticContentTypesComponent, canActivate:[AuthSecurity] },
  { 'path': 'addAgent/:id', component: AddAgentComponent, canActivate:[AuthSecurity] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
