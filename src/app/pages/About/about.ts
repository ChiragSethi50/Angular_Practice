import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
})
export class About {
  constructor(public route: ActivatedRoute) {
    console.log('123');
  }

  user = '';

  ngOnInit() {
    console.log('456');
    this.route.params.subscribe((params) => {
      this.user = params['user'];
    });
  }
}
