import React, { useContext, useState, useEffect } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

const AddExpense = () => {
  const { handelAdd, editValue } = useContext(ExpenseContext);

  const [input, setInput] = useState({
    Title: "",
    Description: "",
    Amout: "",
    Date: "",
    Category: "",
    Type: "",
  });

  useEffect(() => {
    if (editValue) {
      setInput({
        Title: editValue.Title,
        Description: editValue.Description,
        Amout: editValue.Amout,
        Date: editValue.Date,
        Category: editValue.Category,
        Type: editValue.Type,
      });
    }
  }, [editValue]);

  console.log(input);

  const handelChange = (field, e) => {
    setInput((prev) => {
      return {
        ...prev,
        [field]: e.target.value,
      };
    });
  };

  const handelSubmit = (e) => {
    e.preventDefault();

    handelAdd(input);

    setInput({
      Title: "",
      Description: "",
      Amout: "",
      Date: "",
      Category: "",
      Type: "",
    });
  };
  return (
    <>
      <form onSubmit={handelSubmit}>
        <input
          type="text"
          placeholder="Enter Title"
          value={input.Title}
          onChange={(e) => handelChange("Title", e)}
        />
        <br />
        <br />

        <input
          type="text"
          placeholder="Enter Description"
          value={input.Description}
          onChange={(e) => handelChange("Description", e)}
        />
        <br />
        <br />

        <input
          type="number"
          placeholder="Enter Amout"
          value={input.Amout}
          onChange={(e) => handelChange("Amout", e)}
        />
        <br />
        <br />
        <input
          type="date"
          placeholder="Enter Date"
          value={input.Date}
          onChange={(e) => handelChange("Date", e)}
        />
        <br />
        <br />
        <select
          name=""
          id=""
          value={input.Category}
          onChange={(e) => handelChange("Category", e)}
        >
          <option value="Money Transfer">Money Transfer</option>
          <option value="Cash Withdrawal">Cash Withdrawal</option>
          <option value="General Expense">General Expense</option>
          <option value="Food&Dining">Food&Dining</option>
          <option value="HealthCare">HealthCare</option>
          <option value="Shopping">Shopping</option>
          <option value="Travel">Travel</option>
        </select>
        <br />
        <br />

        <select
          name=""
          id=""
          value={input.Type}
          onChange={(e) => handelChange("Type", e)}
        >
          <option name="type" value="credit">
            select
          </option>
          <option name="type" value="debit">
            Debit
          </option>
          <option name="type" value="debit">
            Credit
          </option>
        </select>
        <br />
        <br />
        <button type="submit">{editValue ? "update" : "Add"}</button>
      </form>
    </>
  );
};

export default AddExpense;
