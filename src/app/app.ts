import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Counter } from './counter/counter';
import { Events } from './events/events';
import { ControlFlow } from './control-flow/control-flow';
import { Signals } from './signals/signals';
import { TwoWayBinding } from './two-way-binding/two-way-binding';
import { Directives } from './directives/directives';
import { Parent } from './parent/parent';
import { GlobalStateManagement } from './global-state-management/global-state-management';
import { Pipes } from './pipes/pipes';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink,
    Counter,
    Events,
    ControlFlow,
    Signals,
    TwoWayBinding,
    Directives,
    Parent,
    GlobalStateManagement,
    Pipes
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = signal('Angular');
  name = 'Ace';
}
