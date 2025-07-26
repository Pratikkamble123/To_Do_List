
import { Priority } from './types';

export const PRIORITY_STYLES: Record<Priority, string> = {
  [Priority.HIGH]: 'bg-red-100 text-red-800 border-red-200',
  [Priority.MEDIUM]: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  [Priority.LOW]: 'bg-green-100 text-green-800 border-green-200',
};
