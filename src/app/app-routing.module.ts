import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookListComponent} from './book-list/book-list.component';
import {BookDetailComponent} from './book-detail/book-detail.component';
import {BookAddComponent} from './book-add/book-add.component';
import {BookEditComponent} from './book-edit/book-edit.component';
import {BookDeleteComponent} from './book-delete/book-delete.component';
import {AuthGuard} from './auth-guard.service';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  {path:"",component: BookListComponent},
  {path:"book-detail",component: BookDetailComponent},
  {path:"book-add",component: BookAddComponent,canActivate:[AuthGuard]},
  {path:"book-edit",component: BookEditComponent,canActivate:[AuthGuard]},
  {path:"book-delete",component:BookDeleteComponent,canActivate:[AuthGuard]},
  {path:"login",component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
