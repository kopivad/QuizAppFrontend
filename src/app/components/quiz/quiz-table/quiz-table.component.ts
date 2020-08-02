import {Component, OnInit} from '@angular/core';
import {QuizService} from "../../../services/quiz.service";
import {QuizSessionService} from "../../../services/quiz-session.service";
import {QuizDto} from "../../../types/quiz";

@Component({
  selector: 'app-quiz-table',
  templateUrl: './quiz-table.component.html',
  styleUrls: ['./quiz-table.component.scss']
})
export class QuizTableComponent implements OnInit {
  quiz: QuizDto[] = [];

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
    this.quizService.getQuizzes().subscribe(data => this.quiz = data);
  }
}
