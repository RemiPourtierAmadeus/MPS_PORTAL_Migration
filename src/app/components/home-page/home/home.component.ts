/**
 * Component HomeComponent
 */

import {Component, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls : ['./home.component.css'],
})
export class HomeComponent {

    @Output() pageToOpen=new EventEmitter<number>();

    constructor(){}

    /**
     * OpenPage is called while user requests a redirection to another page. The name of the page is
     * in parameters. If the page to open is metrics, performance or news, we emit the request to the
     * pattern component.
     * @param request
     */
    openPage(request:number){
        /**
         * Request value:
         * 4 -> Metrics homepage
         * 3 -> News homepage
         */
        if(request==4 || request==3 ){
            this.pageToOpen.emit(request);
        }
        else{
            console.log("A problem has occurred while the application tries to open metrics or performance page");
        }
    }

}
