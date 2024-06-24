import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.scss'
})
export class ToDoComponent {

  newTodo: string = '';
  todos: { text: string, editing: boolean }[] = [];

  createTodo() {

    // this.todos.push({ text: this.newTodo, editing: false });
    // this.newTodo = '';
    
    if (this.newTodo.trim()) {
      this.todos.push({ text: this.newTodo, editing: false });
      this.newTodo = '';
    }
  }

  updateTodo(todo: { text: string, editing: boolean }) {

    // if(todo.editing=false){
    //   todo.editing=true;
    // }

    todo.editing = !todo.editing;

    // if(todo.editing=true){
    //   todo.editing=false;
    // }
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
    // this.todos.delete()
  }

}