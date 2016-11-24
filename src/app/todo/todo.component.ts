import { Component } from '@angular/core';

export interface Todo {
  text: string,
  done: boolean
}

@Component({
  selector: 'todo',
  template: `
    <div class="col-sm-6 col-sm-offset-3">
      <h2>Todo</h2>      
      <ul class="list-unstyled">
        <li *ngFor="let todoItem of todos">
          <input  type="checkbox" [(ngModel)]="todoItem.done">
          <span class="done-{{todoItem.done}}">{{todoItem.text}}</span>
        </li>
      </ul>    
    </div>`
})

export class TodoComponent {
  todos: Todo[] = [
    { text: 'learn angular', done: true },
    { text: 'build an angular app', done: false }
  ];
}