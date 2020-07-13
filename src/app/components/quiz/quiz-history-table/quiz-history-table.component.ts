import { Component, OnInit } from '@angular/core';
import {QuizHistoryService} from "../../../services/quiz-history.service";
import {QuizHistoryDto} from "../../../types";

@Component({
  selector: 'app-quiz-history-table',
  templateUrl: './quiz-history-table.component.html',
  styleUrls: ['./quiz-history-table.component.scss']
})
export class QuizHistoryTableComponent implements OnInit {
  histories: QuizHistoryDto[];
  constructor(private quizHistoryService: QuizHistoryService) { }

  ngOnInit(): void {
    this.quizHistoryService.getAll().subscribe(h => this.histories = h);
  }

  getPdf(history: QuizHistoryDto) {
    this.quizHistoryService.getPdfFile(history.id).subscribe(data => {
      let downloadURL = window.URL.createObjectURL(data);
      let link = document.createElement('a');
      link.href = downloadURL;
      link.download = history.pdfFilename + ".pdf";
      link.click();
    });
  }

  getCsv(history: QuizHistoryDto) {
    this.quizHistoryService.getCsvFile(history.id).subscribe(data => {
      let downloadURL = window.URL.createObjectURL(data);
      let link = document.createElement('a');
      link.href = downloadURL;
      link.download = history.pdfFilename + ".csv";
      link.click();
    });
  }
}
