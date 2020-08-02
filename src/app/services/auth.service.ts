import {Injectable} from '@angular/core';
import {UserDto} from "../types/user";
import {Role} from "../types/roles";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: UserDto = {
    creationDate: new Date(),
    email: 'kopivad@gmail.com',
    id: 1,
    name: 'Vadym',
    password: 'some pass',
    role: Role.ADMINISTRATOR
  };

  constructor() { }
}
