import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyContainerComponent } from './my-container/my-container.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsComponent } from './forms/forms.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Stapper1Component } from './stapper1/stapper1.component';
import { AgGridModule } from 'ag-grid-angular';






@NgModule({
  declarations: [
    AppComponent,
    MyContainerComponent,
    FormsComponent,
    Stapper1Component,
    
    
   
    
   
  
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AgGridModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
