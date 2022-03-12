import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IQuestion } from 'src/app/core/models/questions-models';
import { QuestionsDataService } from 'src/app/core/services/questions-data.service';
import { StorageService } from 'src/app/core/services/storage.service';

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.scss'],
})
export class EditQuestionComponent implements OnInit {
  question: any;
  questionsList: IQuestion[] = [];
  choice: any;
  questionId: any;

  constructor(
    private storage: StorageService,
    private router: Router,
    private QuestionsData: QuestionsDataService,
    private route: ActivatedRoute
  ) {
    this.questionId = this.route.snapshot.paramMap.get('id');
    if (!this.questionId) router.navigate(['/']);

    this.questionsList = QuestionsData.getStoredQuestions() || [];
    [this.question] = this.questionsList.filter((q) => q.id == this.questionId);
    if (!this.question) router.navigate(['/']);
  }

  ngOnInit(): void {}

  addChoice() {
    this.question.choices.push(this.choice);
    this.choice = '';
  }

  deleteChoice(choice: string) {
    this.question.choices = this.question.choices.filter((c: string) => c !== choice);
  }

  edit() {
    for (let question of this.questionsList) {
      if (this.questionId == question.id) question = this.question;
    }
    this.storage.remove('questions');
    this.storage.set('questions', JSON.stringify(this.questionsList));
    this.router.navigate(['/']);
  }
}
