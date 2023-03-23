import Realm from "realm";

import { ExpenseSchema } from './schemas/ExpenseSchema';

export const getRealm = async () => {
  return await Realm.open({
    path: 'safe-money-app',
    schema: [ExpenseSchema],
  });
}
