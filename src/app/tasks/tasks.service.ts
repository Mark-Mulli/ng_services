import { Task, taskData } from './task.model';
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { }

  private tasks = signal<Task[]>([])

  allTasks = this.tasks.asReadonly()

  addTask(taskData: taskData) {
    const newTask: Task = {
      ...taskData,
      id: Math.random().toString(),
      status: 'OPEN'
    }
    this.tasks.update((oldTasks) => [...oldTasks, newTask])
  }
}
