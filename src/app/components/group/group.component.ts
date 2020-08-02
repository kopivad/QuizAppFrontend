import {Component, OnInit} from '@angular/core';
import {GroupService} from "../../services/group.service";
import {FormControl, FormGroup} from "@angular/forms";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {UserService} from "../../services/user.service";
import {QuizService} from "../../services/quiz.service";
import {Router} from "@angular/router";
import {GroupDto} from "../../types/group";
import {QuizDto} from "../../types/quiz";
import {UserDto} from "../../types/user";

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
  public groups: GroupDto[] = [];
  public group: GroupDto = {
    id: 1,
    name: "",
    quizzes: [],
    users: []
  };
  public groupForm = new FormGroup({
    name: new FormControl(''),
  });
  public searchUserForm = new FormGroup({
    email: new FormControl(''),
  });
  public searchQuizForm = new FormGroup({
    title: new FormControl(''),
  });
  public foundUsers: UserDto[];
  public foundQuizzes: QuizDto[];

  constructor(
    private groupService: GroupService,
    private modalService: NgbModal,
    private userService: UserService,
    private quizService: QuizService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.groupService.getAll().subscribe(data => this.groups = data);
  }

  createGroup() {
    this.group.name = this.groupForm.get('name').value;
    this.groupService.create(this.group)
      .subscribe(data => {
        this.group.id = data;
        this.groups.push(this.group);
        this.groupForm.reset();
      })
  }

  addUser(user: UserDto) {
    this.foundUsers = this.foundUsers.filter(u => u.id != user.id);
    this.group.users.push(user);
  }

  addQuiz(quiz: QuizDto) {
    this.foundQuizzes = this.foundQuizzes.filter(q => q.id != quiz.id);
    this.group.quizzes.push(quiz);
  }

  addUserModal(content) {
    this.modalService.open(content, {ariaLabelledBy: 'add-user-modal'});
  }

  addQuizModal(content) {
    this.modalService.open(content, {ariaLabelledBy: 'add-quiz-modal'});
  }

  removeUser(id: number) {
    this.group.users = this.group.users.filter(u => u.id != id);
  }

  removeQuiz(id: number) {
    this.group.quizzes = this.group.quizzes.filter(q => q.id != id);
  }

  searchUser() {
    let email = this.searchUserForm.get('email').value;
    this.userService.getByEmail(email).subscribe(data => {
      this.foundUsers = data;
    });
  }

  searchQuiz() {
    let title = this.searchQuizForm.get('title').value;
    this.quizService.getByName(title).subscribe(data => {
      this.foundQuizzes = data;
    });
  }

  goTo(id: number) {
    console.log(id)
      this.router.navigate([`group/${id}`]);
  }
}
