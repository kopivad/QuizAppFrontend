import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Quiz} from "../types";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  quizzes: Quiz[] = [];

  constructor(private client: HttpClient) {
    this.getQuizzes().subscribe(data =>
      data.map(q => {
        this.quizzes.push(q);
      }));
  }

  getQuizzes(): Observable<any> {
    return this.client.get('http://localhost:9999/api/v1/quiz/all');
  }

  addQuiz(quiz: Quiz) {
    return this.client
      .post<Quiz>("http://localhost:9999/api/v1/quiz/", quiz)
      .pipe(catchError(this.handleError))
      .subscribe(data => {
        console.log(data);
        this.quizzes.push(data);
      });
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };
}
