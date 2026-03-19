import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { CustomPipePipe } from './custom-pipe/custom-pipe-pipe';

@Component({
  selector: 'app-pipes',
  imports: [CommonModule, CustomPipePipe], // used for pipes
  templateUrl: './pipes.html',
  styleUrl: './pipes.css',
})
export class Pipes {
  title = signal('angular');

  currency = signal(123456);
  date = '12-03-2002';

  user = signal({
    name: "Endeaver",
    age: 123
  })

  customName=signal("Shigaraki")
  
}
