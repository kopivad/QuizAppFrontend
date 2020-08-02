import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {QuizHistoryService} from "./quiz-history.service";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";
import {QuizAnswerService} from "./quiz-answer.service";
import {QuizSessionDto} from "../types/quiz-session";
import {QuizAnswerDto} from "../types/quiz-answer";

@Injectable({
  providedIn: 'root'
})
export class QuizSessionService implements OnInit {
  baseUrl = environment.baseUrl;
  session: QuizSessionDto = {
    date: new Date(),
    id: 0,
    quizId: 0,
    userId: this.authService.currentUser.id,
    results: []
  }

  constructor(
    private client: HttpClient,
    private quizHistoryService: QuizHistoryService,
    private authService: AuthService,
    private quizAnswerService: QuizAnswerService,
    private router: Router
    ) {
  }

  startSession(quizId: number) {
    this.session.quizId = quizId;
    this.saveSession(this.session).subscribe(id => {
      this.session.id = +id
      this.router.navigate([`session/${this.session.id}/quiz/${this.session.quizId}/question/1`]);
    });
  }

  endSession() {
    this.quizHistoryService.createHistory(this.session.id);
    this.session = null;
  }

  private saveSession(quizSessionDto: QuizSessionDto): Observable<number> {
    return this.client.post<number>(`${this.baseUrl}v1/quiz/session`, quizSessionDto);
  }

  updateSession(quizSessionDto: QuizSessionDto): Observable<QuizSessionDto> {
    return this.client
      .put<QuizSessionDto>(`${this.baseUrl}v1/quiz/session`, quizSessionDto);
  }

  ngOnInit(): void {
  }

  addResult(result: QuizAnswerDto) {
    this.quizAnswerService.save(result).subscribe(id => result.id = +id);
    this.session.results.push(result);
  }
}
