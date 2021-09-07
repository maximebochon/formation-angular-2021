import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { NgStyleComponent } from './directives/ng-style/ng-style.component';
import { TextFormattingComponent } from './directives/text-formatting/text-formatting.component';
import { NgClassComponent } from './directives/ng-class/ng-class.component';
import { HighlightDirective } from './directives/highlight.directive';
import { RainbowTypingDirective } from './directives/rainbow-typing.directive';
import { DefaultImagePipe } from './pipes/default-image.pipe';
import { Logger } from './services/logger.service';
import { ToastrModule } from 'ngx-toastr';
import { TodoListAppComponent } from './todoList/components/app/app.component';

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
    CvComponent,
    NgStyleComponent,
    TextFormattingComponent,
    NgClassComponent,
    HighlightDirective,
    RainbowTypingDirective,
    DefaultImagePipe,
    TodoListAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() // ToastrModule added
  ],
  providers: [
    Logger
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
