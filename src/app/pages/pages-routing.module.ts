import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateQuestionComponent } from './create-question/create-question.component'
import { EditQuestionComponent } from './edit-question/edit-question.component'
import { QuestionManagementComponent } from './question-management/question-management.component';
import { QuestionsListComponent } from './questions-list/questions-list.component'

const routes: Routes = [
  {
    path: '',
    component: QuestionManagementComponent,
  },
  {
    path: 'create-question',
    component: CreateQuestionComponent,
  },
  {
    path: 'edit-question/:id',
    component: EditQuestionComponent,
  },
  {
    path: 'questions-list',
    component: QuestionsListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
