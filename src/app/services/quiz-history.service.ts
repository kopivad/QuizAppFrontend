import {Injectable} from '@angular/core';
import {QuizHistory, QuizHistoryDto, QuizSession, QuizSessionDto, User} from "../types";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class QuizHistoryService {
  historyId: number = 0;
  baseUrl: string = environment.baseUrl;

  constructor(
    private client: HttpClient,
    private router: Router
  ) {
  }

  createHistory(sessionId: number) {
    this.client.get(`${this.baseUrl}v1/quiz/history/create/${sessionId}`).subscribe(id => {
      this.historyId = +id;
      this.router.navigate([`quiz/history/${this.historyId}`]);
    })
  }

  getById(historyId: number): Observable<QuizHistoryDto> {
    return this.client.get<QuizHistoryDto>(`${this.baseUrl}v1/quiz/history/${historyId}`);
  }

  getPdfFile(historyId: number): Observable<Blob> {
    return this.client.get<Blob>(`${this.baseUrl}v1/quiz/history/pdf/${historyId}`, { responseType: 'blob' as 'json'});
  }

  getCsvFile(historyId: number): Observable<Blob> {
    return this.client.get<Blob>(`${this.baseUrl}v1/quiz/history/csv/${historyId}`, { responseType: 'blob' as 'json'});
  }

  getAll() : Observable<QuizHistoryDto[]>{
    return this.client.get<QuizHistoryDto[]>(`${this.baseUrl}v1/quiz/history/all`);
  }
}
