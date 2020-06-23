import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Quiz} from "../types";
import {Observable} from "rxjs";
import {QuestionService} from "./question.service";

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(
    private client: HttpClient
  ) {
  }

  getQuizzes(): Observable<any> {
    return this.client.get("http://localhost:9999/api/v1/quiz/all");
  }

  addQuiz(quiz: Quiz) {
    return this.client.post("http://localhost:9999/api/v1/quiz/", quiz).subscribe();
  }

  mapToQuiz(data) {
    return {
      authorId: data.author.id,
      description: data.description,
      creationDate: data.creationDate,
      active: data.active,
      id: data.id,
      title: data.title,
      total: data.total
    }
  }
}
