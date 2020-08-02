import {Quiz, QuizDto} from "./quiz";
import {User, UserDto} from "./user";

export interface GroupDto {
  id: number;
  name: string;
  users?: UserDto[];
  quizzes?: QuizDto[];
}

export interface Group {
  id: number;
  name: string;
  users?: User[];
  quizzes?: Quiz[];
}
