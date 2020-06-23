import {Component, OnInit} from '@angular/core';
import {QuizService} from "../../services/quiz.service";
import {Quiz} from "../../types";

@Component({
  selector: 'app-quiz-table',
  templateUrl: './quiz-table.component.html',
  styleUrls: ['./quiz-table.component.scss']
})
export class QuizTableComponent implements OnInit {
  quizzes: Quiz[] = [];

  constructor(private quizService: QuizService) {
  }

  ngOnInit(): void {
    this.quizService.getQuizzes().subscribe(data =>
      data.map(q => {
        this.quizzes.push(this.quizService.mapToQuiz(q));
      }));
  }

  refreshTable() {
    this.quizzes = [];
    this.ngOnInit();
  }
}
