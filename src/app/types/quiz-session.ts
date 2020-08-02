import {QuizAnswer, QuizAnswerDto} from "./quiz-answer";
import {QuizHistory, QuizHistoryDto} from "./quiz-history";
import {Quiz} from "./quiz";
import {User} from "./user";

export interface QuizSessionDto {
  id: number;
  quizId: number;
  userId: number;
  results?: QuizAnswerDto[];
  histories?: QuizHistoryDto[];
  date: Date;
}


export interface QuizSession {
  id: number;
  quiz: Quiz;
  user: User;
  results?: QuizAnswer[];
  histories?: QuizHistory[];
  date: Date;
}
