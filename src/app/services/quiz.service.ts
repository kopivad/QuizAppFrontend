import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";
import {environment} from "../../environments/environment";
import {Quiz, QuizDto} from "../types/quiz";

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  quizzes: QuizDto[] = [];
  quiz: QuizDto;
  baseUrl: string = environment.baseUrl;

  constructor(private client: HttpClient) {
    this.getQuizzes().subscribe(quizzes => this.quizzes = quizzes);
  }

  getQuizzes(): Observable<QuizDto[]> {
    return this.client.get<QuizDto[]>(`${this.baseUrl}v1/quiz/all`);
  }

  addQuiz(quiz: QuizDto) {
    return this.client
      .post<QuizDto>(`${this.baseUrl}v1/quiz/`, quiz)
      .pipe(catchError(this.handleError))
      .subscribe(data => {
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

  getById(id: number): Observable<Quiz> {
    return this.client.get<Quiz>(`${this.baseUrl}v1/quiz/${id}`);
  }

  getByName(title: string) : Observable<QuizDto[]> {
    return this.client.get<QuizDto[]>(`${environment.baseUrl}v1/quiz?title=${title}`);
  }
}
