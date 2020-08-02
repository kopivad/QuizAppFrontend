import {Quiz} from "./quiz";

export interface EvaluationStepDto {
  id: number;
  minTotal: number;
  maxTotal: number;
  rating: string;
  quizId: number;
}

export interface EvaluationStep {
  id: number;
  minTotal: number;
  maxTotal: number;
  rating: string;
  quiz: Quiz;
}
