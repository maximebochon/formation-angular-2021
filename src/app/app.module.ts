import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
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
import { DefaultImagePipe } from './cv/pipes/default-image.pipe';
import { Logger } from './services/logger.service';
import { ToastrModule } from 'ngx-toastr';
import { TodoListAppComponent } from './todoList/components/app/app.component';
import { HireComponent } from './cv/hire/hire.component';
import { HeaderComponent } from './components/header/header.component';
import { DropdownRoutingBarComponent } from './components/dropdown-routing-bar/dropdown-routing-bar.component';
import { PageDetailComponent } from './cv/page-detail/page-detail.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SimpleFormComponent } from './components/simple-form/simple-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { CycleImageComponent } from './components/cycle-image/cycle-image.component';
import { HttpTestComponent } from './components/http-test/http-test.component';
import { AddComponent } from './cv/add/add.component';

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
    TodoListAppComponent,
    HireComponent,
    HeaderComponent,
    DropdownRoutingBarComponent,
    PageDetailComponent,
    PageNotFoundComponent,
    SimpleFormComponent,
    LoginFormComponent,
    CycleImageComponent,
    HttpTestComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
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
