import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Group, GroupDto} from "../types/group";

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private client: HttpClient) { }

  getAll() : Observable<GroupDto[]> {
    return this.client.get<GroupDto[]>(`${environment.baseUrl}v1/group/all`);
  }

  create(group: GroupDto) : Observable<number> {
    return this.client.post<number>(`${environment.baseUrl}v1/group`, group);
  }

  getById(id: number) : Observable<Group> {
    return this.client.get<Group>(`${environment.baseUrl}v1/group/${id}`);
  }
}
