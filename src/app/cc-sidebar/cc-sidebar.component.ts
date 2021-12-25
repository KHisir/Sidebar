import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cc-sidebar',
  templateUrl: './cc-sidebar.component.html',
  styleUrls: ['./cc-sidebar.component.scss']
})
export class CcSidebarComponent implements OnInit {
  @Input() showSidebar: boolean = false;
  @Input() showOverlay: boolean = true; // used only when fixed is false!
  @Input() fixed: boolean = true;
  @Input() position: string = 'left'; // left or right

  showSettings: boolean = false;

  constructor() {
    if (this.position !== 'left' && this.position !== 'right') {
      this.position = 'left';
    }
  }

  ngOnInit() {
  }

}
