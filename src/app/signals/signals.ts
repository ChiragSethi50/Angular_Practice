import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.html',
  styleUrl: './signals.css',
})
export class Signals {
  // Signal is a wrapper around a value that give a signal when the value changes
  // Signals are of two types writable and computed.
  // Writable can change value whereas computed are read only
  // Signals can contain any value, from primitives to complex data structures.
  // You read a signal's value by calling its getter function, which allows Angular to track where the signal is used.

  x = 0; // normal property
  count: WritableSignal<number> = signal(0); // writable signal

  data: Signal<string> = computed(() => "data") // Computed Signal 

  // Computed signal can have dependency on a writable signal for subscribing to the changes.
  // Direct updations in a computed signal cannot be done
  dependent = computed(() => this.count() + this.count())

  constructor() {
    effect(() => { //effect is used to capture changing values of a signal
      console.log("Count: ", this.count()); // shows updating signal variable in console
    });
    effect(() => {
      console.log("x: ",this.x); // does not catch the updation of a normal property in console
    });
  }

  handleNormalCount() {
    this.x = this.x + 1;
  }

  increaseCount() {
    this.count.update((val) => val + 1); // updating value using previous value
  }
  resetCount() {
    this.count.set(0); // setting a value directly
  }
}
