/**
 * Component VerificationPwdComponent
 */

import {Component} from '@angular/core';

@Component({
    selector: 'verification-pwd',
    templateUrl: './verification-pwd.component.html',
    styleUrls : ['./verification-pwd.component.scss']
})
export class VerificationPwdComponent {

    private firstPwd;
    private secondPwd;

    constructor(password1, password2){
        this.firstPwd=password1;
        this.secondPwd=password2;
    }

    verifyPwd(){
        if(this.firstPwd!=="" && this.secondPwd!==""
            && this.firstPwd===this.secondPwd) return true;
        return false;
    }
}
