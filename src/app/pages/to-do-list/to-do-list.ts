import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do-list',
  imports: [FormsModule],
  templateUrl: './to-do-list.html',
  styleUrl: './to-do-list.css',
})
export class ToDoList {
  task = '';
  tasks: { id: number; task: string }[] = [];

  handleAdd(task: string) {
    if (task) {
      this.tasks.push({ id: Math.ceil(Math.random() * 10000), task });
      this.task = '';
    }
  }
  handleDelete(id: number) {
    this.tasks = this.tasks.filter((t) => t.id !== id);
  }
}
