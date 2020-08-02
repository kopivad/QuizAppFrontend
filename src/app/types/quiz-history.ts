import {QuizSession} from "./quiz-session";
import {User} from "./user";

export interface QuizHistoryDto {
  id: number;
  total: number;
  rating: string;
  sessionId: number;
  userId: number;
  pdfFilename: string;
  csvFilename: string;
}

export interface QuizHistory {
  id: number;
  total: number;
  rating: string;
  session: QuizSession;
  user: User;
  pdfFilename: string;
  csvFilename: string;
}
