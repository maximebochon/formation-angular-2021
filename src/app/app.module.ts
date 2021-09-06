import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { ColorByTextComponent } from './components/color-by-text/color-by-text.component';
import { BidirComponent } from './components/bidir/bidir.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ColorByTextComponent,
    BidirComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
