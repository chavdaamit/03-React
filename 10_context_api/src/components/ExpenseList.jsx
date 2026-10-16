import React, { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

const ExpenseList = () => {
  const { expense, handelDelete, handelEdit } = useContext(ExpenseContext);
  return (
    <>
      <h2>Expense List</h2>

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
          {expense.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.Title}</td>
                <td>{item.Description}</td>
                <td>{item.Amout}</td>
                <td>{item.Date}</td>
                <td>{item.Category}</td>
                <td>{item.Type}</td>
                <td>
                  <button onClick={() => handelDelete(index)}>Delete</button>
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
