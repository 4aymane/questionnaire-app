import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { QuestionManagementComponent } from './question-management/question-management.component';
import { CreateQuestionComponent } from './create-question/create-question.component';
import { EditQuestionComponent } from './edit-question/edit-question.component';
import { QuestionsListComponent } from './questions-list/questions-list.component';
import { FormsModule } from '@angular/forms'


@NgModule({
  declarations: [
    QuestionManagementComponent,
    CreateQuestionComponent,
    EditQuestionComponent,
    QuestionsListComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule
  ]
})
export class PagesModule { }
