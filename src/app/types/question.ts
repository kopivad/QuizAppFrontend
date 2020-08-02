import {QuestionType} from "./question-type";
import {Answer, AnswerDto} from "./answer";
import {QuizAnswer, QuizAnswerDto} from "./quiz-answer";
import {Quiz} from "./quiz";

export interface QuestionDto {
  id: number;
  title: string;
  value: number;
  type: QuestionType;
  answers?: AnswerDto[];
  quizAnswers?: QuizAnswerDto[];
  quizId: number;
}

export interface Question {
  id: number;
  title: string;
  value: number;
  type: QuestionType;
  answers?: Answer[];
  quizAnswers?: QuizAnswer[];
  quiz: Quiz;
}

