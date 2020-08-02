import {Question} from "./question";
import {QuizSession} from "./quiz-session";
import {Answer} from "./answer";

export interface QuizAnswerDto {
  id: number;
  questionId: number;
  sessionId: number;
  answerId: number;
}

export interface QuizAnswer {
  id: number;
  question: Question;
  session: QuizSession;
  answer: Answer;
}
