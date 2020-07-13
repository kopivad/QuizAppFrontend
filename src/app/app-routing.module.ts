import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateQuizComponent} from "./components/quiz/create-quiz/create-quiz.component";
import {QuizTableComponent} from "./components/quiz/quiz-table/quiz-table.component";
import {QuizSessionComponent} from "./components/quiz/quiz-session/quiz-session.component";
import {QuizHistoryComponent} from "./components/quiz/quiz-history/quiz-history.component";
import {QuizHistoryTableComponent} from "./components/quiz/quiz-history-table/quiz-history-table.component";


const routes: Routes = [
  {path: '', redirectTo: 'quiz/all', pathMatch: 'full'},
  {path: 'quiz/create', component: CreateQuizComponent},
  {path: 'quiz/all', component: QuizTableComponent},
  {path: 'quiz/history', component: QuizHistoryTableComponent},
  {path: 'session/:sessionId/quiz/:quizId/question/:questionIdx', component: QuizSessionComponent},
  {path: 'quiz/history/:id', component: QuizHistoryComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
