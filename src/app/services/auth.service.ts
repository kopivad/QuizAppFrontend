import {Injectable} from '@angular/core';
import {Role, User} from "../types";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: User = {
    creationDate: new Date(),
    email: 'kopivad@gmail.com',
    id: 1,
    name: 'Vadym',
    password: 'some pass',
    role: Role.ADMINISTRATOR
  };

  constructor() { }
}
