import {Component, EventEmitter, Output, Input} from '@angular/core';

/**
 * Component HeaderComponent
 */

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {


  private menuIsClosed:boolean;

  @Input("currentFrameValue") currentFrameValue:string;
  @Input("linksName") linksName:string[];
  @Input("routerLinks") routerLinks:string[];

  @Output() pageToOpen = new EventEmitter<number>();

  constructor() {
    this.menuIsClosed = true;
  }

  ngOnInit() {
    console.log("Current frame value: " + this.currentFrameValue);

    this.currentFrameValue = "News";
  }

  /**
   * ShowHideMenu changes the value of menuIsClosed in order to show or hide the menu.
   */
  showHideMenu() {
    this.menuIsClosed = !this.menuIsClosed;
  }

  /**
   * Function openHomePage.
   * We use the output to define the page to open
   * 0 => user is not connected => show connection content
   * 1 => user is connected and we show the home page
   * 2 => user is connected and the user has choosen the part of the website
   * 3 => user is connected and want to see the news
   * 4 => metrics home page
   *
   */
  openHomePage() {
    console.log("yes from open homepage");
    this.pageToOpen.emit(4);
  }

}
