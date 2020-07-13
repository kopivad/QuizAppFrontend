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

export interface QuizDto {
  id: number;
  title: string;
  description: string;
  total: number;
  active: boolean;
  creationDate: Date;
  authorId?: number;
  questions: QuestionDto[];
  evaluationSteps: EvaluationStepDto[];
}

export interface QuizSession {
  id: number;
  quiz: Quiz;
  user: User;
  results: QuizAnswer[];
  date: Date;
}

export interface QuizSessionDto {
  id: number;
  quizId: number;
  userId: number;
  results?: QuizAnswerDto[];
  date: Date;
}

export interface QuizAnswer {
  id: number;
  quiz: Quiz;
  user: User;
  history: QuizHistory;
  question: Question;
  session: QuizSession;
  answer: Answer;
}

export interface QuizAnswerDto {
  id: number;
  questionId: number;
  sessionId: number;
  answerId: number;
}

export interface QuizHistory {
  id: number;
  results: QuizAnswer[];
  rating: string;
  total: number;
  user: User;
  pdfFilename: string;
  csvFilename: string;
}

export interface QuizHistoryDto {
  id: number;
  results: QuizAnswerDto[];
  rating: string;
  total: number;
  userId: number;
  pdfFilename: string;
  csvFilename: string;
}

export interface EvaluationStep {
  id: number,
  minTotal: number,
  maxTotal: number,
  rating: string,
  quiz?: Quiz;
}

export interface EvaluationStepDto {
  id: number;
  minTotal: number;
  maxTotal: number;
  rating: string;
  quizId?: number;
}

export interface Question {
  id: number;
  title: string;
  value: number;
  type: QuestionType;
  quiz?: Quiz;
  answers?: Answer[];
}

export interface QuestionDto {
  id: number;
  title: string;
  value: number;
  type: QuestionType;
  quizId?: number;
  answers?: AnswerDto[];
}

export interface Answer {
  id: number;
  body: string;
  isRight: boolean;
  question?: Question;
}

export interface AnswerDto {
  id: number;
  body: string;
  isRight: boolean;
  questionId?: number;
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

