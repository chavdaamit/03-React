import { createContext, useReducer } from "react";

export const ExpenseContext = createContext();

const initialArg = {
  ExpenseList: [
    {
      Id: 1,
      Title: "Food",
      Description: "lunch",
      Amout: 1000,
      Date: "2026-10-16",
      Category: "Food",
      Type: "Debit",
    },
    {
      Id: 2,
      Title: "Cricket",
      Description: "Cricket bat",
      Amout: 1500,
      Date: "2026-10-16",
      Category: "Sports",
      Type: "Debit",
    },
  ],
  editValue: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "add": {
      const newExpense = {
        ...action.payload,
        Id: Date.now(),
        Amout: Number(action.payload.Amout),
      };

      return {
        ...state,
        ExpenseList: [...state.ExpenseList, newExpense],
      };
    }

    case "delete": {
      return {
        ...state,
        ExpenseList: state.ExpenseList.filter(
          (item) => item.Id !== action.payload,
        ),
      };
    }

    case "edit": {
      return {
        ...state,
        editValue: state.ExpenseList.find((item) => item.Id === action.payload),
      };
    }

    case "update": {
      return {
        ...state,
        ExpenseList: state.ExpenseList.map((item) =>
          item.Id === action.payload.Id ? action.payload : item,
        ),
        editValue: null,
      };
    }
    default:
      return state;
  }
}

const ExpenseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialArg);

  const handelAdd = (input) => {
    dispatch({
      type: "add",
      payload: input,
    });
  };

  const handelDelete = (id) => {
    dispatch({
      type: "delete",
      payload: id,
    });
  };

  const handelEdit = (id) => {
    dispatch({
      type: "edit",
      payload: id,
    });
  };

  const handelUpdate = (input) => {
    dispatch({
      type: "update",
      payload: {
        ...input,
        Amout: Number(input.Amout),
      },
    });
  };

  const debit = state.ExpenseList.filter(
    (item) => item.Type === "Debit",
  ).reduce((total, item) => total + Number(item.Amout), 0);

  const credit = state.ExpenseList.filter(
    (item) => item.Type === "Credit",
  ).reduce((total, item) => total + Number(item.Amout), 0);

  const balance = credit - debit;

  const value = {
    ExpenseList: state.ExpenseList,
    handelAdd,
    handelDelete,
    handelEdit,
    handelUpdate,
    editValue: state.editValue,
    debit,
    credit,
    balance,
  };

  return (
    <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
  );
};

export default ExpenseProvider;
