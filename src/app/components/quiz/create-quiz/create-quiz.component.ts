import {Component} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {QuizService} from "../../../services/quiz.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {AuthService} from "../../../services/auth.service";
import {QuizDto} from "../../../types/quiz";
import {QuestionType} from "../../../types/question-type";

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.scss']
})
export class CreateQuizComponent {
  quizId: number = 1;
  stepId: number = 1;
  questionId: number = 1;
  questionIdx: number;
  answerId: number = 1;
  page: number = 1;
  quiz: QuizDto = {
    id: this.quizId,
    authorId: 1,
    description: '',
    active: false,
    creationDate: new Date(),
    questions: [],
    title: '',
    total: 0,
    evaluationSteps: []
  };

  constructor(
    private quizService: QuizService,
    private modalService: NgbModal,
    private authService: AuthService
  ) {
  }

  answerForm = new FormGroup({
    body: new FormControl(''),
    right: new FormControl('')
  });

  questionForm = new FormGroup({
    title: new FormControl(''),
    value: new FormControl(''),
    type: new FormControl('')
  });

  quizForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    total: new FormControl('')
  });

  evaluationStepForm = new FormGroup({
    minTotal: new FormControl(''),
    maxTotal: new FormControl(''),
    rating: new FormControl('')
  });

  types = Object.keys(QuestionType);

  saveQuiz() {
    this.quiz.title = this.quizForm.get('title').value;
    this.quiz.description = this.quizForm.get('description').value;
    this.quiz.total = this.quizForm.get('total').value;
    this.quizId++;
  }

  saveQuestion() {
    this.quiz.questions.push({
      id: this.questionId,
      title: this.questionForm.get('title').value,
      value: this.questionForm.get('value').value,
      type: this.questionForm.get('type').value,
      answers: [],
      quizId: 1
    });
    this.questionForm.reset();
    this.questionId++;
  }

  open(content, idx) {
    this.questionIdx = idx;
    this.modalService.open(content, {ariaLabelledBy: 'answer-modal'});
  }

  saveAnswer() {
    this.quiz.questions[this.questionIdx - 1].answers.push({
      id: this.answerId,
      body: this.answerForm.get('body').value,
      isRight: this.answerForm.get('right').value,
      questionId: 1
    });
    this.answerId++;
    this.answerForm.reset();
  }

  removeQuestion(id) {
    this.quiz.questions = this.quiz.questions.filter(q => q.id != id);
  }

  removeAnswer(answerId) {
    this.quiz.questions[this.questionIdx - 1].answers = this.quiz.questions[this.questionIdx - 1].answers.filter(a => a.id != answerId);
  }

  nextStep() {
    this.saveQuiz();
    this.page++;
  }

  backStep() {
    this.page--;
  }

  submitForm() {
    this.quizService.addQuiz(this.quiz);
    this.page = 1;
    this.quizForm.reset();
    this.questionForm.reset();
    this.answerForm.reset();
    this.quiz = {
      id: this.quizId,
      authorId: 1,
      description: '',
      active: false,
      questions: [],
      creationDate: new Date(),
      title: '',
      total: 0,
      evaluationSteps: []
    };
  }

  addEvaluationStep() {
    let step = {
      id: this.stepId,
      minTotal: this.evaluationStepForm.get('minTotal').value,
      maxTotal: this.evaluationStepForm.get('maxTotal').value,
      rating: this.evaluationStepForm.get('rating').value,
      quizId: 1
    }
    this.quiz.evaluationSteps.push(step);
    this.evaluationStepForm.reset();
    this.stepId++;
  }

  removeStep(id) {
    this.quiz.evaluationSteps = this.quiz.evaluationSteps.filter(q => q.id != id);
  }
}
