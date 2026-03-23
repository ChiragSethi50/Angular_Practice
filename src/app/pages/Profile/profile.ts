import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
})
export class Profile {
  constructor(public route: ActivatedRoute) {}
  profileData: { id: number; name: string; age: number } | any = null;

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.profileData = params;
    });
  }
}
