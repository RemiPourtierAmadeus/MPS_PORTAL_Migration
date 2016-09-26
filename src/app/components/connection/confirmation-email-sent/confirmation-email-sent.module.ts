import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationEmailSentComponent} from "../index";

@NgModule({
  imports: [CommonModule],
  declarations: [ConfirmationEmailSentComponent],
  exports: [ConfirmationEmailSentComponent],
  providers: []
})

export class ConfirmationEmailSentModule { }
