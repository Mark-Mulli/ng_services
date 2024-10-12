export type TaskStatus = 'OPEN' | 'IN_PROGRESS' | 'DONE';

export interface taskData {
  title: string;
  description: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}
