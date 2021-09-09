import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorByTextComponent } from './components/color-by-text/color-by-text.component';
import { FirstComponent } from './components/first/first.component';
import { SimpleFormComponent } from './components/simple-form/simple-form.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CvComponent } from './cv/cv/cv.component';
import { PageDetailComponent } from './cv/page-detail/page-detail.component';
import { TextFormattingComponent } from './directives/text-formatting/text-formatting.component';
import { TodoListAppComponent } from './todoList/components/app/app.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { CycleImageComponent } from './components/cycle-image/cycle-image.component';
import { HttpTestComponent } from './components/http-test/http-test.component';

const routes: Routes = [
  { path: '', component: FirstComponent },
  { path: 'color', component: ColorByTextComponent },
  { path: 'color/:color', component: ColorByTextComponent },
  { path: 'text', component: TextFormattingComponent },
  { path: 'todo', component: TodoListAppComponent },
  { path: 'form', component: SimpleFormComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'cv', children: [
    { path: '', component: CvComponent },
    { path: ':id', component: PageDetailComponent },
  ]},
  { path: 'CV', redirectTo: 'cv', pathMatch: 'full' },
  { path: 'cycle-image', component: CycleImageComponent },
  { path: 'http-test', component: HttpTestComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
