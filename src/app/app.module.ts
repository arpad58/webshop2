import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { ProductListComponent } from './page/product-list/product-list.component';
import { ProductEditorComponent } from './page/product-editor/product-editor.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductListComponent,
    ProductEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,      /* table */
    FormsModule,           /* editor update */
    ReactiveFormsModule,   /* editor update */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
