import {Component} from '@angular/core';
import {QuizService} from "../../../services/quiz.service";
import {Quiz} from "../../../types";

@Component({
  selector: 'app-quiz-table',
  templateUrl: './quiz-table.component.html',
  styleUrls: ['./quiz-table.component.scss']
})
export class QuizTableComponent {
  quizzes: Quiz[] = [];

  constructor(private quizService: QuizService) {
    this.quizzes = quizService.quizzes;
  }
}
