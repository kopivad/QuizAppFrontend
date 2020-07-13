import {Component} from '@angular/core';
import {QuestionType, Quiz, QuizDto, Role} from "../../../types";
import {FormControl, FormGroup} from "@angular/forms";
import {QuizService} from "../../../services/quiz.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {AuthService} from "../../../services/auth.service";

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
      answers: []
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
      isRight: this.answerForm.get('right').value
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
      rating: this.evaluationStepForm.get('rating').value
    }
    this.quiz.evaluationSteps.push(step);
    this.evaluationStepForm.reset();
    this.stepId++;
  }

  removeStep(id) {
    this.quiz.evaluationSteps = this.quiz.evaluationSteps.filter(q => q.id != id);
  }

  initQuiz() {
    this.quiz = {
      active: false,
      authorId: this.authService.currentUser.id,
      creationDate: new Date(),
      description: 'Math description',
      evaluationSteps: [
        {
          id: this.stepId,
          minTotal: 35,
          maxTotal: 44,
          rating: 'FX'
        },
        {
          id: this.stepId + 1,
          minTotal: 45,
          maxTotal: 60,
          rating: 'F'
        },
        {
          id: this.stepId + 2,
          minTotal: 61,
          maxTotal: 64,
          rating: 'E'
        },
        {
          id: this.stepId + 3,
          minTotal: 65,
          maxTotal: 74,
          rating: 'D'
        },
        {
          id: this.stepId + 4,
          minTotal: 75,
          maxTotal: 80,
          rating: 'C'
        },
        {
          id: this.stepId + 5,
          minTotal: 81,
          maxTotal: 90,
          rating: 'B'
        },
        {
          id: this.stepId + 6,
          minTotal: 91,
          maxTotal: 100,
          rating: 'A'
        }
      ],
      id: this.quizId,
      questions: [
        {
          id: this.questionId,
          type: QuestionType.NUMBER,
          value: 25,
          title: '2*2',
          answers: [
            {
              id: this.answerId,
              isRight: true,
              body: '4',
            },
            {
              id: this.answerId + 1,
              isRight: false,
              body: '3',
            },
            {
              id: this.answerId + 2,
              isRight: false,
              body: '6',
            }
          ]
        },
        {
          id: this.questionId,
          type: QuestionType.NUMBER,
          value: 25,
          title: '3*3',
          answers: [
            {
              id: this.answerId + 3,
              isRight: true,
              body: '9',
            },
            {
              id: this.answerId + 4,
              isRight: false,
              body: '8',
            },
            {
              id: this.answerId + 5,
              isRight: false,
              body: '10',
            }
          ]
        },
        {
          id: this.questionId,
          type: QuestionType.NUMBER,
          value: 25,
          title: '4*4',
          answers: [
            {
              id: this.answerId + 6,
              isRight: true,
              body: '16',
            },
            {
              id: this.answerId + 7,
              isRight: false,
              body: '17',
            },
            {
              id: this.answerId + 8,
              isRight: false,
              body: '15',
            }
          ]
        },
        {
          id: this.questionId,
          type: QuestionType.NUMBER,
          value: 25,
          title: '5*5',
          answers: [
            {
              id: this.answerId + 9,
              isRight: true,
              body: '25',
            },
            {
              id: this.answerId + 10,
              isRight: false,
              body: '24',
            },
            {
              id: this.answerId + 11,
              isRight: false,
              body: '23',
            }
          ]
        }
      ],
      title: 'Math',
      total: 100
    };
  }

}
