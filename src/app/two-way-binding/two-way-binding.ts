import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way-binding',
  imports: [FormsModule],
  templateUrl: './two-way-binding.html',
  styleUrl: './two-way-binding.css',
})
export class TwoWayBinding {
  //Syncing of data between html and js files is called two way binding

  // First way is using [(ngModel)] for tracking changes
  name = '';

  changeName(event: Event) {
    let val = (event.target as HTMLInputElement).value;
    this.name = val;
  }
}
