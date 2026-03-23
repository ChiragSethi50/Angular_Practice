import { Component, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = signal('Angular');
  name = 'Ace'; //using to pass as dynamic route
  
  constructor(public router: Router) {}

  redirectToList() {
    // navigating with button
    this.router.navigate(['to-do-list'], {
      queryParams: {
        defaultTask: 'Study',
      },
    });
  }
}
