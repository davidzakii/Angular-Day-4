import { NgModule,LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr);

import {FormsModule} from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardItemComponent } from './card-item/card-item.component';
import { CardListComponent } from './card-list/card-list.component';
import { ShowStockPipe } from './show-stock.pipe';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PasswordMatchValidatorDirective } from './password-match-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardItemComponent,
    CardListComponent,
    ShowStockPipe,
    LoginComponent,
    RegisterComponent,
    PasswordMatchValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
