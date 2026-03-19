import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  count = 0;

  handleCounter(val: string) {
    if (val == 'increment') {
      this.count = ++this.count;
    } else if (val == 'decrement') {
      if (this.count == 0) return;
      else {
        this.count = this.count-1;
      }
    } else {
      this.count = 0;
    }
  }
}
