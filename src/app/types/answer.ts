import {QuizAnswer, QuizAnswerDto} from "./quiz-answer";
import {Question} from "./question";

export interface AnswerDto {
  id: number;
  body: string;
  isRight: boolean;
  questionId: number;
  quizAnswers?: QuizAnswerDto[];
}

export interface Answer {
  id: number;
  body: string;
  isRight: boolean;
  question: Question;
  quizAnswers?: QuizAnswer[];
}
