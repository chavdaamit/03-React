import React, { useContext, useState } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
const ExpenseList = () => {
  const {
    ExpenseList: expense = [],
    handelDelete,
    handelEdit,
    debit = 0,
    credit = 0,
    balance = 0,
  } = useContext(ExpenseContext);

  const [expenseQuery, setExpenseQuery] = useState({
    title: "",
    Type: "all",
    Category: "all",
    sort: "",
  });

  const handelChange = (field, e) => {
    setExpenseQuery((prev) => {
      return {
        ...prev,
        [field]: e.target.value,
      };
    });
  };

  const filterList = expense
    .filter((item) =>
      item.Title?.toLowerCase().includes(expenseQuery.title.toLowerCase()),
    )
    .filter((item) =>
      expenseQuery.Type === "all" ? true : item.Type === expenseQuery.Type,
    )
    .filter((item) =>
      expenseQuery.Category === "all"
        ? true
        : item.Category === expenseQuery.Category,
    );

  const handelSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={handelSubmit}>
        <label htmlFor="">Search</label>
        <input
          type="text"
          placeholder="Enter title"
          value={expenseQuery.title}
          onChange={(e) => handelChange("title", e)}
        />

        <label htmlFor="">Category</label>
        <select
          name=""
          id=""
          value={expenseQuery.Category}
          onChange={(e) => handelChange("Category", e)}
        >
          <option value="">select</option>
          <option value="Money Transfer">Money Transfer</option>
          <option value="Cash Withdrawal">Cash Withdrawal</option>
          <option value="General Expense">General Expense</option>
          <option value="Food&Dining">Food&Dining</option>
          <option value="HealthCare">HealthCare</option>
          <option value="Shopping">Shopping</option>
          <option value="Travel">Travel</option>
        </select>

        <label htmlFor="">Type</label>
        <select
          name=""
          id=""
          value={expenseQuery.Type}
          onChange={(e) => handelChange("Type", e)}
        >
          <option value="">Select Type</option>
          <option value="debit">Debit</option>
          <option value="credit">Credit</option>
        </select>

        <label htmlFor="">sort</label>
        <select
          name=""
          id=""
          value={expenseQuery.sort}
          onChange={(e) => handelChange("sort", e)}
        >
          <option value="">Select Type</option>
          <option value="asc">ascending</option>
          <option value="desc">descending</option>
          <option value="moneyAsc">Money Ascending</option>
          <option value="moneyDsc">Money Descending</option>
        </select>
      </form>

      <h2>Expense List</h2>

      <h3>Debit: ₹{debit}</h3>
      <h3>Credit: ₹{credit}</h3>
      <h3>Balance: ₹{balance}</h3>

      <table border={2}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Category</th>
            <th>Type</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>

        <tbody>
          {filterList.map((item, index) => {
            return (
              <tr key={item.Id}>
                <td>{index + 1}</td>
                <td>{item.Title}</td>
                <td>{item.Description}</td>
                <td>{item.Amout}</td>
                <td>{item.Date}</td>
                <td>{item.Category}</td>
                <td>{item.Type}</td>

                <td>
                  <button onClick={() => handelDelete(item.Id)}>Delete</button>
                </td>

                <td>
                  <button onClick={() => handelEdit(item)}>Edit</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ExpenseList;
