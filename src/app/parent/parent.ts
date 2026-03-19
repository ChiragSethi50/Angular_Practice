import { Component, signal } from '@angular/core';
import { Child } from './child/child';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parent',
  imports: [Child, FormsModule],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent {
  data = signal(['Toya']);

  newName = '';

  selectedName = signal('');

  addName(name: string) {
    if (!name) return;
    this.data.update((data) => {
      if (data.includes(name)) return data;
      return [...data, name];
    });
    this.newName = '';
  }

  selectName(name: string) {
    this.selectedName.set(name);
  }

  deleteName(name: string) {
    this.data.update((data) => {
      return data.filter((item) => item != name);
    })
  }
}
