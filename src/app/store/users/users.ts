import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Users {
  fetchUsers() {
    return [
      {
        id: 1,
        name: 'Ace',
        age: 21,
        email: 'ace@mail.com',
      },
      {
        id: 2,
        name: 'Luffy',
        age: 18,
        email: 'luffy@mail.com',
      },
      {
        id: 3,
        name: 'Zoro',
        age: 23,
        email: 'zoro@mail.com',
      },
      {
        id: 4,
        name: 'Sanji',
        age: 22,
        email: 'sanji@mail.com',
      },
      {
        id: 5,
        name: 'Roger',
        age: 51,
        email: 'roger@mail.com',
      },
    ];
  }
}
