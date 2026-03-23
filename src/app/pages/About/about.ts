import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
})
export class About {
  constructor(public route: ActivatedRoute) {}

  user = '';

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.user = params['user'];
    });
  }
}
