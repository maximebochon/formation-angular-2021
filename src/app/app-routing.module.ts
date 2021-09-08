import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ColorByTextComponent } from './components/color-by-text/color-by-text.component';
import { FirstComponent } from './components/first/first.component';
import { CvComponent } from './cv/cv/cv.component';
import { TextFormattingComponent } from './directives/text-formatting/text-formatting.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'first', component: FirstComponent },
  { path: 'color', component: ColorByTextComponent },
  { path: 'text', component: TextFormattingComponent },
  { path: 'cv', component: CvComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
