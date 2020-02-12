import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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

const routes: Routes = [
  { 'path': '', 'redirectTo': '/login', 'pathMatch': 'full' },
  { 'path': 'login', component: LoginComponent },
  { 'path': 'dashboard', component: DashboardComponent },
  { 'path': 'user', component: UserManagementComponent },
  { 'path': 'userDetails/:id', component: ViewUserComponent },
  { 'path': 'addBalance/:id/:type', component: AddWalletBalanceComponent },
  { 'path': 'addBusinessUser', component: AddBusinessUserComponent },
  { 'path': 'agent', component: AgentManagementComponent },
  { 'path': 'category', component: CategoryComponent },
  { 'path': 'viewCategory/:id', component: ViewCategoryComponent },
  { 'path': 'addEditCategory/:id', component: AddEditCategoryComponent },
  { 'path': 'category', component: CategoryComponent },
  { 'path': 'viewCategory/:id', component: ViewCategoryComponent },
  { 'path': 'addEditCategory/:id', component: AddEditCategoryComponent },
  { 'path': 'subcategories', component: SubCategoryComponent },
  { 'path': 'viewSubCategories/:id', component: ViewsubCategoryComponent },
  { 'path': 'addEditCategories/:id', component: AddEditsubCategoryComponent },
  { 'path': 'staticContent', component: StaticContentComponent },
  { 'path': 'staticContentType/:type', component: StaticContentTypesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
