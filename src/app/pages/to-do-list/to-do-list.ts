import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-to-do-list',
  imports: [FormsModule],
  templateUrl: './to-do-list.html',
  styleUrl: './to-do-list.css',
})
export class ToDoList {
  task = '';
  tasks: { id: number; task: string }[] = [];

  constructor(public route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.tasks.push({ id: Math.ceil(Math.random() * 10000), task: params['defaultTask'] });
    });
  }

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
