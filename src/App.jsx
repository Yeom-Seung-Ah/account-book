import "./App.css";
import History from "./components/History";
import Summary from "./components/Summary";
import TransactionUpdate from "./components/TransactionUpdate";

function App() {
  return (
    <div className="main-container">
      <div className="main-content">
        <h1>나의 가계부</h1>
        <Summary />
        <TransactionUpdate />
        <History />
      </div>
    </div>
  );
}

export default App;
