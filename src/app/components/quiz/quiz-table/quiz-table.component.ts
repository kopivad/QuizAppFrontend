import {Component, OnInit} from '@angular/core';
import {QuizService} from "../../../services/quiz.service";
import {Quiz, QuizDto, QuizAnswer, QuizSession, Role, User} from "../../../types";
import {QuizSessionService} from "../../../services/quiz-session.service";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-quiz-table',
  templateUrl: './quiz-table.component.html',
  styleUrls: ['./quiz-table.component.scss']
})
export class QuizTableComponent implements OnInit {
  quizDtos: QuizDto[] = [];

  constructor(
    private quizService: QuizService,
    private quizSessionService: QuizSessionService,
  ) {
  }

  start(quizId) {
    this.quizSessionService
      .startSession(quizId);
  }

  ngOnInit(): void {
    this.quizService.getQuizzes().subscribe(dtos => this.quizDtos = dtos);
  }
}
