export interface IExpense {
  _id?: string;
  name: string;
  value: number;
  type: string;
  created_at?: Date;
}
