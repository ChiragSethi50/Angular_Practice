import { Component, EventEmitter, Input, Output, Signal } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  @Input() data!: string[];
  @Output() selectName = new EventEmitter();
  @Output() deleteName = new EventEmitter();

  whichName(name?: string) {
    this.selectName.emit(name);
  }

  delete(name?: string) {
    this.deleteName.emit(name);
  }
}
