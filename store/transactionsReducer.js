import {
  ADD_TRANSACTION,
  REMOVE_TRANSACTION,
  UPDATE_TRANSACTION,
} from "./actionTypes";

import transactions from "./transactions";

function id() {
  var S4 = function () {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };
  return (
    S4() +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    S4() +
    S4()
  );
}

const initialState = {
  transactions: transactions,
};

const transactionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TRANSACTION:
      return Object.assign({}, state, {
        transactions: [
          {
            id: id(),
            ...action.transaction,
          },
          ...state.transactions,
        ],
      });

    case REMOVE_TRANSACTION:
      return {
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.id
        ),
      };
    case UPDATE_TRANSACTION:
      return {
        transactions: state.transactions.map((transaction) => {
          return transaction.id === action.id
            ? { ...transaction, ...action.transaction }
            : transaction;
        }),
      };

    default:
      return state;
  }
};
export default transactionsReducer;
