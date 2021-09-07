import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Todo } from '../../model/todo.model';
import { TodoListService } from '../../services/todo-list.service';

@Component({
  selector: 'todo-list-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class TodoListAppComponent implements OnInit {

  todoList: Todo[] = [];
  todo: Todo = new Todo();

  constructor(
    private todoListService: TodoListService,
    private toaster: ToastrService
  ) {
    this.todoList = todoListService.get();
  }

  ngOnInit(): void {
    this.toaster.info('Bienvenue sur le gestionnaire de TODO');
  }

  addTodo(): void {
    this.todoListService.add(this.todo);
    this.toaster.success(`Le TODO ${this.todo.name} a été ajouté.`);
    this.todo = new Todo();
  }

  removeTodo(todo: Todo): void {
    if (this.todoListService.remove(todo)) {
      this.toaster.success('Le TODO a été supprimé avec succès');
    } else {
      this.toaster.error(`Le TODO ${this.todo.name} n'a pas été supprimé. Contacter le support technique.`);
    }
  }
}
