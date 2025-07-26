
export enum Priority {
  LOW = 'Low',
  MEDIUM = 'Medium',
  HIGH = 'High',
}

export interface Task {
  id: string;
  title: string;
  priority: Priority;
  isCompleted: boolean;
}
