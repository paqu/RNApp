export const ADD_TRANSACTION = "ADD_TRANSACTION";
export const REMOVE_TRANSACTION = "REMOVE_TRANSACTION";
export const UPDATE_TRANSACTION = "UPDATE_TRANSACTION";

export const addTransaction = (transaction) => ({
  type: ADD_TRANSACTION,
  transaction: transaction,
});

export const removeTransaction = (id) => ({
  type: REMOVE_TRANSACTION,
  id: id,
});

export const updateTransaction = (id, transaction) => ({
  type: UPDATE_TRANSACTION,
  id: id,
  transaction: transaction,
});
