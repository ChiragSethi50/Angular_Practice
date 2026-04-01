import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-settings',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './settings.html',
})
export class Settings {}
