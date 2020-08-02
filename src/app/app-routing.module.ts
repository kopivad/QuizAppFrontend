import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateQuizComponent} from "./components/quiz/create-quiz/create-quiz.component";
import {QuizTableComponent} from "./components/quiz/quiz-table/quiz-table.component";
import {QuizSessionComponent} from "./components/quiz/quiz-session/quiz-session.component";
import {QuizHistoryComponent} from "./components/quiz/quiz-history/quiz-history.component";
import {QuizHistoryTableComponent} from "./components/quiz/quiz-history-table/quiz-history-table.component";
import {GroupComponent} from "./components/group/group.component";
import {GroupPageComponent} from "./components/group/group-page/group-page.component";


const routes: Routes = [
  {path: '', redirectTo: 'quiz/all', pathMatch: 'full'},
  {path: 'quiz/create', component: CreateQuizComponent},
  {path: 'quiz/all', component: QuizTableComponent},
  {path: 'quiz/history', component: QuizHistoryTableComponent},
  {path: 'session/:sessionId/quiz/:quizId/question/:questionIdx', component: QuizSessionComponent},
  {path: 'quiz/history/:id', component: QuizHistoryComponent},
  {path: 'group', component: GroupComponent},
  {path: 'group/:id', component: GroupPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
