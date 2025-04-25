import "./App.css";
import History from "./components/History";
import Summary from "./components/Summary";
import TransactionUpdate from "./components/TransactionUpdate";
import useTransactions from "../hooks/useTransactions";

function App() {
  const { transactions, addTransaction, removeTransaction } = useTransactions();
  return (
    <div className="main-container">
      <div className="main-content">
        <h1>나의 가계부</h1>
        <Summary />
        <TransactionUpdate addTransaction={addTransaction} />
        <History
          transactions={transactions}
          removeTransaction={removeTransaction}
        />
      </div>
    </div>
  );
}

export default App;
