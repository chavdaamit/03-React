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
    setExpenseQuery((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
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

  const sortedList = [...filterList].sort((a, b) => {
    switch (expenseQuery.sort) {
      case "asc":
        return a.Title.localeCompare(b.Title);

      case "desc":
        return b.Title.localeCompare(a.Title);

      case "moneyAsc":
        return Number(a.Amout) - Number(b.Amout);

      case "moneyDsc":
        return Number(b.Amout) - Number(a.Amout);

      default:
        return 0;
    }
  });

  return (
    <>
      <h2>Expense List</h2>

      <h3>Total Debit: ₹{debit}</h3>
      <h3>Total Credit: ₹{credit}</h3>
      <h3>Balance: ₹{balance}</h3>

      <hr />

      <form onSubmit={(e) => e.preventDefault()}>
        <label>Search by Title: </label>
        <input
          type="text"
          placeholder="Enter title"
          value={expenseQuery.title}
          onChange={(e) => handelChange("title", e)}
        />

        <br />
        <br />

        <label>Category: </label>
        <select
          value={expenseQuery.Category}
          onChange={(e) => handelChange("Category", e)}
        >
          <option value="all">All Categories</option>
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

        <label>Type: </label>
        <select
          value={expenseQuery.Type}
          onChange={(e) => handelChange("Type", e)}
        >
          <option value="all">All Types</option>
          <option value="Debit">Debit</option>
          <option value="Credit">Credit</option>
        </select>

        <br />
        <br />

        <label>Sort: </label>
        <select
          value={expenseQuery.sort}
          onChange={(e) => handelChange("sort", e)}
        >
          <option value="">Default Order</option>
          <option value="asc">Title A to Z</option>
          <option value="desc">Title Z to A</option>
          <option value="moneyAsc">Amount Low to High</option>
          <option value="moneyDsc">Amount High to Low</option>
        </select>
      </form>

      <br />

      <table border={1} cellPadding={10}>
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
          {sortedList.map((item, index) => (
            <tr key={item.Id}>
              <td>{index + 1}</td>
              <td>{item.Title}</td>
              <td>{item.Description}</td>
              <td>₹{item.Amout}</td>
              <td>{item.Date}</td>
              <td>{item.Category}</td>
              <td>{item.Type}</td>

              <td>
                <button type="button" onClick={() => handelEdit(item.Id)}>
                  Edit
                </button>
              </td>

              <td>
                <button type="button" onClick={() => handelDelete(item.Id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ExpenseList;
