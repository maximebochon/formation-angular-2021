import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { ColorByTextComponent } from './components/color-by-text/color-by-text.component';
import { BidirComponent } from './components/bidir/bidir.component';
import { BidirCardComponent } from './components/bidir-card/bidir-card.component';
import { ItemComponent } from './cv/item/item.component';
import { CardDetailComponent } from './cv/card-detail/card-detail.component';
import { ListComponent } from './cv/list/list.component';
import { CvComponent } from './cv/cv/cv.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ColorByTextComponent,
    BidirComponent,
    BidirCardComponent,
    ItemComponent,
    CardDetailComponent,
    ListComponent,
    CvComponent
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
