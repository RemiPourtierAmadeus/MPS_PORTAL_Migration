import { NgModule, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {LogInComponent, ConnectionContentModule} from "../index";

import {ManageUsersService} from "../../../shared/services/manage-users.service";
import {UserComponent} from "../../models/user/user.component";

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [ConnectionContentModule, LogInComponent, UserComponent],
  exports: [LogInComponent],
  providers: []
})

export class LogInModule { }
