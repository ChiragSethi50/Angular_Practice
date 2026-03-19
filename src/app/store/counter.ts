import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root', // this means that there will only be one global instance of this class rather than seperate instance every time it is called
})
export class Counter {
  count = signal(0);

  decrement() {
    this.count.update((c) => c - 1);
  }

  increment() {
    this.count.update((c) => c + 1);
  }

  reset() {
    this.count.set(0);
  }
}
