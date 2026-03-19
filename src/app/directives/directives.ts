import { NgFor, NgIf, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  imports: [NgIf, NgFor, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './directives.html',
  styleUrl: './directives.css',
})
export class Directives {
  // Directive is a class that adds additional behaviour to elements in your application
  // A feature in angular that helps to provide more power to Dom elements
  // Such as if-else, for loop, adding styles, etc
  // Examples
  // ngIf, ngFor, ngStyle, ngSwitch, ngClass
  // Types of Directives
  // Component Directives: used in component template file
  // Structural Directives: change structure of DOM by adding or removing or manipulating elements
  // Attribute Directives: modify appearance or behaviour of an existing element

  show = false;
  handleToggle() {
    this.show = !this.show
  }

  loop = ["a", "b", "c", "d", "e"]

  bgColor = "blue"

  textColor=""
  handleChange(val: string) {
      this.textColor = val
  }

}
