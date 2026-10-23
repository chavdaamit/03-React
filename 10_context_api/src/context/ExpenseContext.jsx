// import { createContext, useState } from "react";

import { createContext, useReducer } from "react";

// export const ExpenseContext = createContext();

// const initialValues = [
//   {
//     Id: 1,
//     Title: "Food",
//     Description: "lunch",
//     Amout: 1000,
//     Date: "2026-10-16",
//     Category: "Food",
//     Type: "Debit",
//   },
//   {
//     Id: 2,
//     Title: "Cricket",
//     Description: "Cricket bat",
//     Amout: 1500,
//     Date: "2026-10-16",
//     Category: "Sports",
//     Type: "Debit",
//   },
// ];

// export const ExpenseProvider = ({ children }) => {
//   const [expense, setExpense] = useState(initialValues);

//   const [editValue, setEditValue] = useState(null);

//   // Add and Update Expense
//   const handelAdd = (data) => {
//     if (!data) {
//       return console.log("Add expense data");
//     }

//     if (editValue) {
//       setExpense((prev) =>
//         prev.map((item) =>
//           item.Id === editValue.Id
//             ? {
//                 ...item,
//                 ...data,
//                 Id: editValue.Id,
//                 Amout: Number(data.Amout),
//               }
//             : item,
//         ),
//       );

//       setEditValue(null);
//     } else {
//       const newExpense = {
//         ...data,
//         Id: Date.now(),
//         Amout: Number(data.Amout),
//       };

//       setExpense((prev) => [...prev, newExpense]);
//     }
//   };

//   // Edit Expense
//   const handelEdit = (item) => {
//     setEditValue(item);
//   };

//   // Delete Expense
//   const handelDelete = (index) => {
//     setExpense((prev) => prev.filter((item, i) => i !== index));
//   };

//   // Total Debit
//   const debit = expense
//     .filter((item) => item.Type === "Debit")
//     .reduce((acc, curr) => acc + Number(curr.Amout), 0);

//   // Total Credit
//   const credit = expense
//     .filter((item) => item.Type === "Credit")
//     .reduce((acc, curr) => acc + Number(curr.Amout), 0);

//   // Balance
//   const balance = credit - debit;

//   return (
//     <>
//       <ExpenseContext.Provider
//         value={{
//           expense,
//           handelAdd,
//           handelDelete,
//           editValue,
//           handelEdit,
//           setEditValue,
//           debit,
//           credit,
//           balance,
//         }}
//       >
//         {children}
//       </ExpenseContext.Provider>
//     </>
//   );
// };

export const ExpenseContext = createContext({
  ExpenseList: [],
  handelAdd: () => {},
  handelDelete: () => {},
  handelEdit: () => {},
  editValue: null,
  setEditValue: () => {},
  debit: 0,
  credit: 0,
  balance: 0,
});

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
        Id: new Date().getTime(),

        ...action.payload,
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
        editValue: action.payload,
      };
    }

    case "clearEdit": {
      return {
        ...state,
        editValue: null,
      };
    }

    case "update": {
      return {
        ...state,
        ExpenseList: state.ExpenseList.map((item) =>
          item.Id === state.editValue.Id
            ? {
                ...item,
                ...action.payload,
                Id: item.Id,
                Amout: Number(action.payload.Amout),
              }
            : item,
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
    if (state.editValue) {
      dispatch({
        type: "update",
        payload: input,
      });
    } else {
      dispatch({
        type: "add",
        payload: { ...input, Amout: Number(input.Amout) },
      });
    }
  };
  const handelDelete = (id) => {
    dispatch({
      type: "delete",
      payload: id,
    });
  };
  const handelEdit = (item) => {
    dispatch({
      type: "edit",
      payload: item,
    });
  };

  const setEditValue = (value) => {
    dispatch({
      type: value ? "edit" : "clearEdit",
      payload: value,
    });
  };

  const debit = state.ExpenseList.filter(
    (item) => item.Type === "Debit",
  ).reduce((total, item) => total + Number(item.Amout || 0), 0);

  const credit = state.ExpenseList.filter(
    (item) => item.Type === "Credit",
  ).reduce((total, item) => total + Number(item.Amout || 0), 0);

  const balance = credit - debit;

  const value = {
    ExpenseList: state.ExpenseList,
    handelAdd,
    handelDelete,
    handelEdit,
    editValue: state.editValue,
    setEditValue,
    debit,
    credit,
    balance,
  };

  return (
    <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
  );
};

export default ExpenseProvider;
