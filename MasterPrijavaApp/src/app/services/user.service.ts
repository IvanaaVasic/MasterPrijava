import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}
}

import { Korisnik } from '../models/korisnik';

// export class UserService {
//   private user: Korisnik;
//   constructor() {}

//   setAuthenticatedUser(user: Korisnik) {
//     this.user = user;
//   }

//   getLoggedInUser() {
//     return this.user;
//   }
// }
