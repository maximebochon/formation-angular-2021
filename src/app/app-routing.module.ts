import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorByTextComponent } from './components/color-by-text/color-by-text.component';
import { FirstComponent } from './components/first/first.component';
import { CvComponent } from './cv/cv/cv.component';
import { TextFormattingComponent } from './directives/text-formatting/text-formatting.component';
import { TodoListAppComponent } from './todoList/components/app/app.component';

const routes: Routes = [
  { path: '', component: FirstComponent },
  { path: 'color', component: ColorByTextComponent },
  { path: 'color/:color', component: ColorByTextComponent },
  { path: 'text', component: TextFormattingComponent },
  { path: 'todo', component: TodoListAppComponent },
  { path: 'cv', component: CvComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
