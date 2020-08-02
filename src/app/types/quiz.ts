import {Question, QuestionDto} from "./question";
import {EvaluationStep, EvaluationStepDto} from "./evaluation-step";
import {QuizSession, QuizSessionDto} from "./quiz-session";
import {User} from "./user";
import {Group} from "./group";

export interface QuizDto {
  id: number;
  title: string;
  description: string;
  total: number;
  active: boolean;
  creationDate: Date;
  authorId: number;
  sessions?: QuizSessionDto[];
  questions?: QuestionDto[];
  evaluationSteps: EvaluationStepDto[];
  groupId?: number;
}

export interface Quiz {
  id: number;
  title: string;
  description: string;
  total: number;
  active: boolean;
  creationDate: Date;
  author: User;
  sessions?: QuizSession[];
  questions?: Question[];
  evaluationSteps: EvaluationStep[];
  group?: Group;
}
