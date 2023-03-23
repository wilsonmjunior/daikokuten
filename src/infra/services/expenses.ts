import uuid from 'react-native-uuid';

import { IExpense } from "../models/Expense";
import { getRealm } from "../realm";

export async function listFixedExpense() {
  const realm = await getRealm();

  try {
    const fixedExpense = realm.objects<IExpense[]>('Expense')
      .filtered("type = 'FIXED'")
      .sorted("created_at")
      .toJSON();

    return fixedExpense;
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
      .toJSON();

    return variablesExpenses;
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
