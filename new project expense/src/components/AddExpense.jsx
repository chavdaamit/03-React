import React, { useState, useContext, useEffect } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

const initialInput = {
  Title: "",
  Description: "",
  Amout: "",
  Date: "",
  Category: "",
  Type: "",
};

const AddExpense = () => {
  const [input, setinput] = useState(initialInput);

  const { handelAdd, editValue, handelUpdate } = useContext(ExpenseContext);

  useEffect(() => {
    if (editValue) {
      setinput({
        Title: editValue.Title,
        Description: editValue.Description,
        Amout: editValue.Amout,
        Date: editValue.Date,
        Category: editValue.Category,
        Type: editValue.Type,
      });
    }
  }, [editValue]);

  const handelChange = (field, e) => {
    setinput((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handelSubmit = (e) => {
    e.preventDefault();

    if (editValue) {
      handelUpdate({
        ...input,
        Id: editValue.Id,
      });
    } else {
      handelAdd(input);
    }

    setinput(initialInput);
  };

  return (
    <>
      <h2>{editValue ? "Edit Expense" : "Add Expense"}</h2>

      <form onSubmit={handelSubmit}>
        <input
          type="text"
          placeholder="Enter Title"
          value={input.Title}
          onChange={(e) => handelChange("Title", e)}
          required
        />
        <br />
        <br />

        <input
          type="text"
          placeholder="Enter Description"
          value={input.Description}
          onChange={(e) => handelChange("Description", e)}
          required
        />
        <br />
        <br />

        <input
          type="number"
          placeholder="Enter Amount"
          value={input.Amout}
          onChange={(e) => handelChange("Amout", e)}
          required
        />
        <br />
        <br />

        <input
          type="date"
          value={input.Date}
          onChange={(e) => handelChange("Date", e)}
          required
        />
        <br />
        <br />

        <select
          value={input.Category}
          onChange={(e) => handelChange("Category", e)}
          required
        >
          <option value="">Select Category</option>
          <option value="Money Transfer">Money Transfer</option>
          <option value="Cash Withdrawal">Cash Withdrawal</option>
          <option value="General Expense">General Expense</option>
          <option value="Food">Food</option>
          <option value="Food&Dining">Food&Dining</option>
          <option value="HealthCare">HealthCare</option>
          <option value="Shopping">Shopping</option>
          <option value="Travel">Travel</option>
          <option value="Sports">Sports</option>
        </select>
        <br />
        <br />

        <select
          value={input.Type}
          onChange={(e) => handelChange("Type", e)}
          required
        >
          <option value="">Select Type</option>
          <option value="Debit">Debit</option>
          <option value="Credit">Credit</option>
        </select>
        <br />
        <br />

        <button type="submit">{editValue ? "Update" : "Add"}</button>
      </form>
    </>
  );
};

export default AddExpense;
