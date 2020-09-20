import {
  ADD_TRANSACTION,
  REMOVE_TRANSACTION,
  UPDATE_TRANSACTION,
} from "./actionTypes";

import { v4 as uuidv4 } from "uuid";
import transactions from "./transactions";

const initialState = {
  transactions: transactions,
};

const transactionsReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TRANSACTION:
      console.log("ADD TRANSACTION");
      return Object.assign({}, state, {
        transactions: [
          ...state.transactions,
          {
            id: v4(),
            ...action.transaction,
          },
        ],
      });
    case REMOVE_TRANSACTION:
      console.log("REMOVE TRANSACTION");
      return {
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.id
        ),
      };
    case UPDATE_TRANSACTION:
      console.log("UPDATE TRANSACTION");
      return {
        transactions: state.transactions.map((transaction) => {
          transaction.id === action.id
            ? { ...action.transaction }
            : transaction;
        }),
      };
    default:
      return state;
  }
};
export default transactionsReducer;
