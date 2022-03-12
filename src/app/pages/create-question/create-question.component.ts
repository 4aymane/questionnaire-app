import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionsDataService } from 'src/app/core/services/questions-data.service';
import { StorageService } from 'src/app/core/services/storage.service';
import { IQuestion } from 'src/app/core/models/questions-models';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.scss'],
})
export class CreateQuestionComponent implements OnInit {
  question: IQuestion = {
    id: 1,
    type: '',
    question: '',
    choices: [],
    date: null
  };
  questionsList: IQuestion[] = [];
  choice: any;

  constructor(
    private storage: StorageService,
    private router: Router,
    private QuestionsData: QuestionsDataService
  ) {
    this.questionsList = QuestionsData.getStoredQuestions() || [];
    if (this.questionsList.length)
      this.question.id = this.questionsList.slice(-1)[0].id + 1;
  }

  ngOnInit() {}

  addChoice() {
    this.question.choices.push(this.choice);
    this.choice = '';
  }

  create() {
    this.question.date = Date.now()
    this.questionsList.push(this.question);
    this.storage.set('questions', JSON.stringify(this.questionsList));
    this.router.navigate(['/']);
  }
}
