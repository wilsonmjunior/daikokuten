import uuid from 'react-native-uuid';
import { Expense } from '../../dtos/Expense';

import { IExpense } from "../models/Expense";
import { getRealm } from "../realm";

const expenseMapper = (expensesResult: Realm.Results<IExpense & Realm.Object<unknown, never>>) =>
  expensesResult.map((expense) => ({
    id: expense._id,
    name: expense.name,
    type: expense.type,
    value: expense.value,
    createdAt: expense.created_at,
  } as Expense))

export async function listFixedExpense() {
  const realm = await getRealm();

  try {
    const fixedExpense = realm.objects<IExpense>('Expense')
      .filtered("type = 'FIXED'")
      .sorted("created_at")

    return expenseMapper(fixedExpense);
  } catch (error) {
    console.warn(error);
  } finally {
    realm.close();
  }
};

export async function listVariableExpense() {
  const realm = await getRealm();

  try {
    const variablesExpenses = realm.objects<IExpense>('Expense')
      .filtered("type = 'VARIABLE'")
      .sorted("created_at")

    return expenseMapper(variablesExpenses);
  } catch (error) {
    console.warn(error);
  } finally {
    realm.close();
  }
};

export async function createExpense(data: IExpense) {
  const realm = await getRealm();
  try {
    realm.write(() => {
      realm.create<IExpense>('Expense', {
        ...data,
        _id: uuid.v4(),
        created_at: new Date(),
      } as IExpense);
    });
  } catch (error) {
    console.warn('error', error);
  } finally {
    realm.close();
  }
};

export async function expenseUpdate(expenseId: string) {
  const realm = await getRealm();

  try {
    const expenseSelected = realm.objects<IExpense>('Expense')
      .filtered(`_id = '${expenseId}'`)[0];

    realm.write(() => {
      expenseSelected.type = 'VARIABLE'
    })

    return expenseSelected;
  } catch (error) {

  } finally {
    realm.close();
  }
}
