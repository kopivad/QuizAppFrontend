import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {QuizHistoryDto} from "../../../types";
import {QuizHistoryService} from "../../../services/quiz-history.service";

@Component({
  selector: 'app-quiz-history',
  templateUrl: './quiz-history.component.html',
  styleUrls: ['./quiz-history.component.scss']
})
export class QuizHistoryComponent implements OnInit {
  historyId: number;
  history: QuizHistoryDto;
  private blob: Blob;
  constructor(
    private route: ActivatedRoute,
    private quizHistoryService: QuizHistoryService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(p => {
      this.historyId = +p['id'];
      this.quizHistoryService.getById(this.historyId).subscribe(h => this.history = h);
    })
  }

  getPdf() {
   this.quizHistoryService.getPdfFile(this.historyId).subscribe(data => {
     let downloadURL = window.URL.createObjectURL(data);
     let link = document.createElement('a');
     link.href = downloadURL;
     link.download = this.history.pdfFilename + ".pdf";
     link.click();
   });
  }

  getCsv() {
    this.quizHistoryService.getCsvFile(this.historyId).subscribe(data => {
      let downloadURL = window.URL.createObjectURL(data);
      let link = document.createElement('a');
      link.href = downloadURL;
      link.download = this.history.csvFilename + ".csv";
      link.click();
    });
  }
}
