import { Injectable } from '@angular/core';
import { Logger } from 'src/app/services/logger.service';
import { Todo } from '../model/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  todoList: Todo[] = [];

  constructor(
    private logger: Logger
  ) { }

  log(): void
  {
    this.logger.log(this.todoList);
  }

  get(): Todo[]
  {
    return this.todoList;
  }

  add(todo: Todo): void
  {
    this.todoList.push(todo);
  }

  remove(todo: Todo): boolean
  {
    const index = this.todoList.indexOf(todo);
    if (index < 0) return false;
    this.todoList.splice(index, 1);
    return true;
  }
}
