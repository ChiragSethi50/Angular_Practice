import { Component } from '@angular/core';
import { DisplayCount } from './display-count/display-count';
import { ControlCount } from './control-count/control-count';

@Component({
  selector: 'app-global-state-management',
  imports: [DisplayCount, ControlCount],
  templateUrl: './global-state-management.html',
  styleUrl: './global-state-management.css',
})
export class GlobalStateManagement {
  
}
