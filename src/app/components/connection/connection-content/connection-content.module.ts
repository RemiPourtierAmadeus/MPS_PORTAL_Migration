import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LogInComponent, ChangePwdComponent,
  ForgotPwdComponent, ConfirmationEmailSentComponent} from "../index";
import {ManageUsersService} from "../../../shared/services/manage-users.service";
import {ConnectionContentComponent} from "./connection-content.component";
import { FormsModule } from '@angular/forms';
import {ForgotPwdModule} from "../forgot-pwd/forgot-pwd.module";
import {VerificationPwdComponent} from "../verification-pwd/verification-pwd.component";

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [ConnectionContentComponent,
    LogInComponent,
    ConfirmationEmailSentComponent,
    ForgotPwdComponent,
    ChangePwdComponent],
  exports: [ConnectionContentComponent],
  providers: [ManageUsersService]
})

export class ConnectionContentModule { }
