import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Routes , RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DetailService } from './detail.service';
import { DisplayComponent } from './display/display.component';
import { InputComponent } from './input/input.component';

const app_routes: Routes = [
  
  { path: '', component: InputComponent },
  { path: 'display', component: DisplayComponent }
    
];
@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    RouterModule.forRoot(app_routes)
    
  ],
  providers: [DetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
