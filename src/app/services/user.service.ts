import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {UserDto} from "../types/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private client: HttpClient
  ) { }

  getByEmail(email: string) : Observable<UserDto[]>{
    return this.client.get<UserDto[]>(`${environment.baseUrl}v1/user?email=${email}`);
  }
}
