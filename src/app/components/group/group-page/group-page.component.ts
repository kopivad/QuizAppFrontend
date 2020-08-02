import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {GroupService} from "../../../services/group.service";
import {Group} from "../../../types/group";
import {QuizSessionService} from "../../../services/quiz-session.service";
import {QuizHistory} from "../../../types/quiz-history";
import {ChartDataSets, ChartOptions, ChartType} from "chart.js";
import {Label} from "ng2-charts";

@Component({
  selector: 'app-group-page',
  templateUrl: './group-page.component.html',
  styleUrls: ['./group-page.component.scss']
})
export class GroupPageComponent implements OnInit {
  public group: Group;
  public data: ChartDataSets[];
  public labels: Label[];

  constructor(
    private route: ActivatedRoute,
    private groupService: GroupService,
    private quizSessionService: QuizSessionService,
  ) {
  }

  ngOnInit(): void {
    let id = 0;
    this.route.params.subscribe(p => {
      id = +p['id'];
    });
    this.groupService.getById(id).subscribe(data => {
      this.group = data;
      this.labels = this.getLabels(this.group);
      this.data = this.getData(this.group);
      console.log(this.data);
    });
  }

  start(quizId) {
    this.quizSessionService
      .startSession(quizId);
  }

  getUserTotal(histories: QuizHistory[]): number {
    let sum = 0;
    if (histories === null) return sum;
    histories.forEach(h => sum += h.total);
    return sum;
  }

  getUserPassedQuizzes(histories: QuizHistory[]): number {
    if (histories === null) return 0;
    return histories.length;

  }

  private getLabels(group: Group): string[] {
    let labels = [];
    if (group.users != null) group.users.forEach(u => labels.push(u.name.toString()));
    console.log(labels)
    return labels;
  }

  private getData(group: Group): ChartDataSets[] {
    let data = [];
    group.users.forEach(u => {
      data.push(this.getUserTotal(u.histories));
    })
    return [{
      data: data,
      label: 'Best Users'
    }]
  }

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
}
