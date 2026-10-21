import { createContext, useState } from "react";

export const ExpenseContext = createContext();

const initialValues = [
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
];

export const ExpenseProvider = ({ children }) => {
  const [expense, setExpense] = useState(initialValues);

  const [editValue, setEditValue] = useState(null);

  // Add and Update Expense
  const handelAdd = (data) => {
    if (!data) {
      return console.log("Add expense data");
    }

    if (editValue) {
      setExpense((prev) =>
        prev.map((item) =>
          item.Id === editValue.Id
            ? {
                ...item,
                ...data,
                Id: editValue.Id,
                Amout: Number(data.Amout),
              }
            : item,
        ),
      );

      setEditValue(null);
    } else {
      const newExpense = {
        ...data,
        Id: Date.now(),
        Amout: Number(data.Amout),
      };

      setExpense((prev) => [...prev, newExpense]);
    }
  };

  // Edit Expense
  const handelEdit = (item) => {
    setEditValue(item);
  };

  // Delete Expense
  const handelDelete = (index) => {
    setExpense((prev) => prev.filter((item, i) => i !== index));
  };

  // Total Debit
  const debit = expense
    .filter((item) => item.Type === "Debit")
    .reduce((acc, curr) => acc + Number(curr.Amout), 0);

  // Total Credit
  const credit = expense
    .filter((item) => item.Type === "Credit")
    .reduce((acc, curr) => acc + Number(curr.Amout), 0);

  // Balance
  const balance = credit - debit;

  return (
    <>
      <ExpenseContext.Provider
        value={{
          expense,
          handelAdd,
          handelDelete,
          editValue,
          handelEdit,
          setEditValue,
          debit,
          credit,
          balance,
        }}
      >
        {children}
      </ExpenseContext.Provider>
    </>
  );
};
