import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LogInComponent, ChangePwdComponent,
  ForgotPwdComponent, ConfirmationEmailSentComponent} from "../index";
import {ManageUsersService} from "../../../shared/services/manage-users.service";
import {ConnectionContentComponent} from "./connection-content.component";
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [ConnectionContentComponent, LogInComponent],
  exports: [ConnectionContentComponent],
  providers: [ManageUsersService]
})

export class ConnectionContentModule { }
