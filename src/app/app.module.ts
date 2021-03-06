import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {QuizComponent} from './components/quiz/quiz.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CreateQuizComponent} from './components/quiz/create-quiz/create-quiz.component';
import {HttpClientModule} from "@angular/common/http";
import {QuizTableComponent} from './components/quiz/quiz-table/quiz-table.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {QuizSessionComponent} from './components/quiz/quiz-session/quiz-session.component';
import {QuizHistoryComponent} from './components/quiz/quiz-history/quiz-history.component';
import {QuizHistoryTableComponent} from './components/quiz/quiz-history-table/quiz-history-table.component';
import {GroupComponent} from './components/group/group.component';
import {GroupPageComponent} from './components/group/group-page/group-page.component';
import {ChartsModule} from "ng2-charts";

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    CreateQuizComponent,
    QuizTableComponent,
    NavbarComponent,
    QuizSessionComponent,
    QuizHistoryComponent,
    QuizHistoryTableComponent,
    GroupComponent,
    GroupPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ChartsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
