import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor() { }

  mapToQuestion(data) {
    return {
      id: data.id,
      title: data.title,
      value: data.value,
      type: data.type,
      quizId: data.quiz?.id,
      answers: data.answers?.length
    }
  }
}
