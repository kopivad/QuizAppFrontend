export interface Quiz {
  id: number;
  title: string;
  description: string;
  active: boolean;
  total: number;
  creationDate?: Date;
  authorId?: number;
  questions?: Question[]
}

export interface Question {
  id: number;
  title: string;
  value: number;
  type: QuestionType;
  quizId?: number;
  answers?: Answer[]
}

export interface Answer {
  id: number;
  body: string;
  right: boolean;
  questionId?: number;
}

export enum QuestionType {
  SINGLE = 'SINGLE',
  MULTI = 'MULTI',
  TEXT = 'TEXT',
  NUMBER = 'NUMBER'
}
