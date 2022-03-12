import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class QuestionsDataService {
  constructor(private storage: StorageService) {}
  getStoredQuestions(): any {
    try {
      let data: string = this.storage.get('questions') || '';
      if (!data || !data.length) return;
      data = JSON.parse(data);
      if (!data.length) return;
      return data;
    } catch (error) {
      this.storage.remove('questions');
      return;
    }
  }
}
