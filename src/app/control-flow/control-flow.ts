import { Component } from '@angular/core';

@Component({
  selector: 'app-control-flow',
  imports: [],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css',
})
export class ControlFlow {
  value = false;
  color = 0;

  users = [
    {id: 1, name: "abc", email: "abc@mail.com"},
    {id: 2, name: "def", email: "def@mail.com"},
    {id: 3, name: "ghi", email: "ghi@mail.com"},
    {id: 4, name: "ijk", email: "ijk@mail.com"},
    {id: 5, name: "lmn", email: "lmn@mail.com"},

  ]

  toggle() {
    this.value = !this.value;
  }
  handleColor(val: number) {
    this.color = val;
  }
}
