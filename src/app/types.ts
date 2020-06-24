export interface Quiz {
  id: number;
  title: string;
  description: string;
  active: boolean;
  total: number;
  creationDate?: Date;
  author?: User;
  questions?: Question[],
  evaluationSteps: EvaluationStep[]
}

export interface EvaluationStep {
  id: number,
  minTotal: number,
  rating: string,
  Quiz?: Quiz
}

export interface Question {
  id: number;
  title: string;
  value: number;
  type: QuestionType;
  quiz?: Quiz;
  answers?: Answer[]
}

export interface Answer {
  id: number;
  body: string;
  isRight: boolean;
  question?: Question;
}

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: Role;
  creationDate: Date;
  quizzes?: Quiz[]
}

export enum Role {
  USER = 'USER',
  MODERATOR = 'MODERATOR',
  ADMINISTRATOR = 'ADMINISTRATOR'
}
export enum QuestionType {
  SINGLE = 'SINGLE',
  MULTI = 'MULTI',
  TEXT = 'TEXT',
  NUMBER = 'NUMBER'
}

export interface Alert {
  type: string;
  message: string;
  disabled: boolean;
}
