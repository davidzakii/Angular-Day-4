import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardListComponent } from './card-list/card-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {NotFoundPageComponent} from './not-found-page/not-found-page.component'
import { ProductDatailsComponent } from './product-datails/product-datails.component';
import { AuthGuardGuard } from './auth-guard.guard';
const routes: Routes = [
  {
    path : '',
    component: CardListComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },

  {
    path: "product-datails/:id",
    component: ProductDatailsComponent
  },

  {
    path: "cart",
    component: ProductDatailsComponent,
    canActivate: [AuthGuardGuard]
  },

  {
    path: "**",
    component: NotFoundPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
