import { ObjectSchema } from "realm";

export const ExpenseSchema = {
  name: 'Expense',

  properties: {
    _id: 'string',
    name: 'string',
    type: 'string',
    value: "double",
    created_at: 'date'
  },

  primaryKey: '_id',
} as ObjectSchema;
