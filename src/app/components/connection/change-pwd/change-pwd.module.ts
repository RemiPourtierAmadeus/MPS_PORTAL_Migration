import { NgModule, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {ManageUsersService} from "../../../shared/services/manage-users.service";
import {UserComponent} from "../../models/user/user.component";
import {ChangePwdComponent} from "./change-pwd.component";

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [ChangePwdComponent, UserComponent],
  exports: [ChangePwdComponent],
  providers: [ManageUsersService]
})

export class ChangePwdModule { }
