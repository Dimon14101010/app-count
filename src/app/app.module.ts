import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
  MdButtonModule,
  MdCardModule, MdDatepickerModule, MdInputModule, MdNativeDateModule, MdSelectModule, MdTableModule,
  MdToolbarModule
} from "@angular/material";
import {FormsModule} from "@angular/forms";
import { TableComponent } from './table/table.component';
import {RouterModule} from "@angular/router";
import {routes} from "./app.routes";
import { MainPageComponent } from './main-page/main-page.component';
import {CdkColumnDef, CdkTableModule} from "@angular/cdk";

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdCardModule,
    MdInputModule,
    MdSelectModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdButtonModule,
    FormsModule,
    RouterModule.forRoot(routes),
    MdTableModule,
    CdkTableModule
  ],
  providers: [CdkColumnDef],
  bootstrap: [AppComponent]
})
export class AppModule { }
