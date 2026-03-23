import { Component, signal, WritableSignal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Users } from '../../store/users/users';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './user.html',
})
export class User {
  constructor(
    public route: ActivatedRoute,
    public userService: Users,
  ) {}

  user: WritableSignal<{ id: number; name: string; age: number; email: string } | undefined> =
    signal(undefined);
  ngOnInit() {
    let users = this.userService.fetchUsers();
    this.route.params.subscribe((params) => {
      console.log(params['id']);
      this.user.set(users.find((user) => params['id'] == user.id));
    });
  }
}
