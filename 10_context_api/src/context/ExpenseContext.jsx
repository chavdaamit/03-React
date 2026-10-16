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

  const handelAdd = (data) => {
    if (editValue) {
      setExpense((prev) =>
        prev.map((item) =>
          item.Id === editValue.Id ? { ...item, ...data } : item,
        ),
      );
      setEditValue(null);
    } else {
      setExpense((prev) => [...prev, data]);
    }
  };

  const handelEdit = (item) => {
    setEditValue(item);
  };

  const handelDelete = (index) => {
    setExpense((prev) => prev.filter((item, i) => i !== index));
  };

  return (
    <>
      <ExpenseContext.Provider
        value={{ expense, handelAdd, handelDelete, editValue, handelEdit }}
      >
        {children}
      </ExpenseContext.Provider>
    </>
  );
};
