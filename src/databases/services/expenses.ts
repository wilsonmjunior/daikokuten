import { IExpense } from "../models/Expense";
import { getRealm } from "../realm";

export async function listFixedExpense() {
  const realm = await getRealm();

  try {
    const expense = realm.objects('Expense')
    expense.filtered("type = 'FIXED'")
  } catch (error) {
    console.log(error);
  } finally {
    realm.close();
  }
};

export async function listVariableExpense() {
  const realm = await getRealm();

  try {
    const expense = realm.objects('Expense')
    expense.filtered("type = 'VARIABLE'")
  } catch (error) {
    console.log(error);
  } finally {
    realm.close();
  }
};

export async function createExpense(data: IExpense) {
  const realm = await getRealm();

  try {
    realm.write(() => {
      realm.create('Expense', data);
    });
  } catch (error) {
    console.log('error', error);
  } finally {
    realm.close();
  }
};
