import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuizComponent } from './quiz/quiz.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CreateQuizComponent } from './quiz/create-quiz/create-quiz.component';
import {HttpClientModule} from "@angular/common/http";
import { QuizTableComponent } from './quiz/quiz-table/quiz-table.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    CreateQuizComponent,
    QuizTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
