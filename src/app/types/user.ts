import {Role} from "./roles";
import {Quiz, QuizDto} from "./quiz";
import {QuizHistory, QuizHistoryDto} from "./quiz-history";
import {QuizSession, QuizSessionDto} from "./quiz-session";
import {Group} from "./group";

export interface UserDto {
  id: number;
  email: string;
  name: string;
  password: string;
  role: Role;
  creationDate: Date;
  quizzes?: QuizDto[]
  histories?: QuizHistoryDto[]
  sessions?: QuizSessionDto[]
  groupId?: number;
}


export interface User {
  id: number;
  email: string;
  name: string;
  password: string;
  role: Role;
  creationDate: Date;
  quizzes?: Quiz[]
  histories?: QuizHistory[]
  sessions?: QuizSession[]
  group?: Group;
}
