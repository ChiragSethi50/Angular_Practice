import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-pipes',
  imports: [],
  templateUrl: './pipes.html',
  styleUrl: './pipes.css',
})
export class Pipes {
  title = signal("angular");
}
