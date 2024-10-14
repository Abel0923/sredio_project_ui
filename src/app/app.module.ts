import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { HttpClientModule } from '@angular/common/http';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSnackBarModule  } from '@angular/material/snack-bar'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatExpansionModule,
    MatSnackBarModule,
    AppRoutingModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
