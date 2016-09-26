import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ForgotPwdComponent} from "./forgot-pwd.component";
import {ManageUsersService} from "../../../shared/services/manage-users.service";

@NgModule({
  imports: [CommonModule],
  declarations: [ForgotPwdComponent],
  exports: [ForgotPwdComponent],
  providers: [ManageUsersService]
})

export class ForgotPwdModule { }
