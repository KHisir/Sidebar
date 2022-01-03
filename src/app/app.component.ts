import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cc-sidebar';
  showSidebarLeft: boolean = false;
  showSidebarRight: boolean = false;

  showLeft(): void {
    this.showSidebarLeft = true
  }

  showRight(): void {
    this.showSidebarRight = true
  }
}
