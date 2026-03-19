import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  imports: [],
  templateUrl: './events.html',
  styleUrl: './events.css',
})
export class Events {
  eventType: string | undefined = undefined;
  inputEvent: string | undefined = undefined;

  handleEvent(event: Event) {
    this.eventType = `Event Type: ${event.type}`;
  }

  handleInput(event: Event) {
    this.inputEvent = `Input Event Type: ${event.type}`;
  }
}
