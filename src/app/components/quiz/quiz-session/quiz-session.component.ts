import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {QuizService} from "../../../services/quiz.service";
import {QuizSessionService} from "../../../services/quiz-session.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Quiz} from "../../../types/quiz";
import {Question} from "../../../types/question";

@Component({
  selector: 'app-quiz-session',
  templateUrl: './quiz-session.component.html',
  styleUrls: ['./quiz-session.component.scss']
})
export class QuizSessionComponent implements OnInit {
  quizId: number = 0;
  sessionId: number = 0;
  questionIdx: number = 0;
  answerId: number = 1;
  blockedIdx: number[] = [];
  quiz: Quiz;
  question: Question;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private quizService: QuizService,
    private quizSessionService: QuizSessionService
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(p => {
      this.sessionId = +p['sessionId'];
      this.quizId = +p['quizId'];
      this.questionIdx = +p['questionIdx'] -1;
    })
    this.quizService.getById(this.quizId).subscribe(q => {
      this.quiz = q;
      this.question = this.quiz.questions[this.questionIdx];
      this.changeQuestion(this.questionIdx);
    });


  }

  changeQuestion(idx) {
    this.questionIdx = idx;
    this.question = this.quiz.questions[idx];
    this.router.navigate([`session/${this.sessionId}/quiz/${this.quizId}/question/${this.questionIdx + 1}`]);
  }

  answerForm = new FormGroup({
    id: new FormControl('')
  });

  answer() {
    let answer = {
      answerId: this.answerForm.get('id').value,
      id: this.answerId,
      questionId: this.question.id,
      sessionId: this.sessionId
    }
    this.quizSessionService.addResult(answer);
    this.blockedIdx.push(this.question.id);
    this.answerForm.reset();
    this.answerId++;
    this.changeQuestion(this.questionIdx + 1);
  }

  ifBlocked(id): boolean {
    return !!this.blockedIdx.find(idx => idx === id);
  }

  endSession() {
    this.answer()
    this.quizSessionService.endSession()
  }
}
