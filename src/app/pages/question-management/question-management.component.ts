import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionsDataService } from 'src/app/core/services/questions-data.service';
import { IQuestion } from 'src/app/core/models/questions-models';
import { StorageService } from 'src/app/core/services/storage.service'

@Component({
  selector: 'app-question-management',
  templateUrl: './question-management.component.html',
  styleUrls: ['./question-management.component.scss'],
})
export class QuestionManagementComponent implements OnInit {
  questionsList: IQuestion[] = [];

  constructor(
    private QuestionsData: QuestionsDataService,
    private router: Router,
    private storageService: StorageService
  ) {
    this.questionsList = QuestionsData.getStoredQuestions() || [];
    this.questionsList.reverse()
  }

  ngOnInit(): void {}

  edit(id:any){
    this.router.navigate([`edit-question/${id}`])
  }

  delete(id:any){
    this.questionsList = this.questionsList.filter(q=> q.id !== id)
    let data = this.questionsList.reverse()
    this.storageService.remove('questions')
    this.storageService.set('questions', JSON.stringify(data))
  }
}
