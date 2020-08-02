import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {QuizAnswerDto} from "../types/quiz-answer";

@Injectable({
  providedIn: 'root'
})
export class QuizAnswerService {
  baseUrl: string = environment.baseUrl;

  constructor(private client: HttpClient) { }

  save(answer: QuizAnswerDto) : Observable<QuizAnswerDto> {
    return this.client.post<QuizAnswerDto>(`${this.baseUrl}v1/quiz/answer`, answer);
  }
}
