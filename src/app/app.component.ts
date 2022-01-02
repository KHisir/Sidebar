import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cc-sidebar';
  showSidebar: boolean = false;
  showSidebar2: boolean = false;

  show(): void {
    this.showSidebar = true
  }

  show2(): void {
    this.showSidebar2 = true
  }
}
