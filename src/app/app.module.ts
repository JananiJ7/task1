import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DetailService } from './detail.service';
import { DisplayComponent } from './display/display.component';


@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    
  ],
  providers: [DetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
