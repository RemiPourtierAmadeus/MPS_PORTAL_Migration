import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {LogInComponent, ChangePwdComponent,
  ForgotPwdComponent, ConfirmationEmailSentComponent} from "../index";
import {ManageUsersService} from "../../../shared/services/manage-users.service";

@NgModule({
  imports: [CommonModule],
  declarations: [HomeComponent, LogInComponent, ChangePwdComponent,
    ForgotPwdComponent, ConfirmationEmailSentComponent],
  exports: [HomeComponent],
  providers: [ManageUsersService]
})

export class HomeModule { }
