import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CcSidebarComponent } from './cc-sidebar/cc-sidebar.component';

@NgModule({
  declarations: [	
    AppComponent,
      CcSidebarComponent
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
