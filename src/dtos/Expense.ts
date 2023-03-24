export type TypeExpense = 'FIXED' | 'VARIABLE';

export interface Expense {
  id?: string;
  name: string;
  value: number;
  type: string;
  createdAt?: Date;
}
