import { Component } from '@angular/core';
import { Counter } from '../../counter/counter';
import { Events } from '../../events/events';
import { ControlFlow } from '../../control-flow/control-flow';
import { Signals } from '../../signals/signals';
import { TwoWayBinding } from '../../two-way-binding/two-way-binding';
import { Directives } from '../../directives/directives';
import { Parent } from '../../parent/parent';
import { GlobalStateManagement } from '../../global-state-management/global-state-management';
import { Pipes } from '../../pipes/pipes';
import { Users } from '../../store/users/users';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    Counter,
    Events,
    ControlFlow,
    Signals,
    TwoWayBinding,
    Directives,
    Parent,
    GlobalStateManagement,
    Pipes,
    RouterLink,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(public userService: Users) {}

  users: { id: number, name: string; age: number; email: string }[] = [];
  ngOnInit() {
    this.users = this.userService.fetchUsers();
  }
}
