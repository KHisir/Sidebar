import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cc-sidebar',
  templateUrl: './cc-sidebar.component.html',
  styleUrls: ['./cc-sidebar.component.scss']
})
export class CcSidebarComponent implements OnInit {
  @Input() showSidebar: boolean = false;
  @Input() showOverlay: boolean = false; // used only when fixed is false!
  @Input() fixed: boolean = true;
  @Input() position: string = 'left'; // left or right
  @Input() sidebarMinWidth: number = 250;

  showSettings: boolean = false;
  componentId: string;
  sidebarWidth: number = 250;
  sidebarMaxWidth: number = (90 / 100) * window.innerWidth; // get 90% of screen width.

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.sidebarMaxWidth = (90 / 100) * window.innerWidth; // get 90% of screen width.
  }

  constructor() {
    this.componentId = this.createComponentId();
    if (this.position !== 'left' && this.position !== 'right') {
      this.position = 'left';
    }
  }

  ngOnInit() {
    document.documentElement.style.setProperty('--sidebar-min-width', (this.sidebarMinWidth + 'px'));
    document.documentElement.style.setProperty('--sidebar-width', '250px');
  }

  sidebarWidthChanged(): void {
    document.documentElement.style.setProperty('--sidebar-width', (this.sidebarWidth + 'px'));
  }

  createComponentId() {
    // tslint:disable-next-line:only-arrow-functions
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      // tslint:disable-next-line:no-bitwise
      const r = Math.random() * 16 | 0;
      // tslint:disable-next-line:no-bitwise
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

}
