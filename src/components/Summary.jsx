import React from "react";
import css from "./../css/Summary.module.css";
import useTransactions from "../../hooks/useTransactions";

const Summary = () => {
  const { transactions } = useTransactions();

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, curr) => acc + curr.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, curr) => acc + curr.amount, 0);

  const balance = income - expense;

  return (
    <div className={`${css.summaryContainer} summary`}>
      <div className={css.balanceBox}>
        <p>잔액</p>
        <h3>₩{balance.toLocaleString()}</h3>
      </div>
      <div className={css.incomeExpenseBox}>
        <div className={css.incomeBox}>
          <p>수입</p>
          <span className={css.income}>₩{income.toLocaleString()}</span>
        </div>
        <div className={css.separator}></div>
        <div className={css.expenseBox}>
          <p>지출</p>
          <span className={css.expense}>₩{expense.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};

export default Summary;
