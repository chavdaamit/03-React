
import AddExpense from "./components/AddExpense";
import ExpenseList from "./components/ExpenseList";
import { ExpenseProvider } from "./context/ExpenseContext";

const App = () => {
  return (
    <>
      <ExpenseProvider>
        <AddExpense />
        <ExpenseList />
      </ExpenseProvider>
    </>
  );
};

export default App;
