import React, { useState } from "react";
import css from "./../css/TransactionUpdate.module.css";
import useTransactions from "./../../hooks/useTransactions";

const TransactionUpdate = () => {
  const [transactionDetailText, setTransactionDetailText] = useState("");
  const [transactionDetailMoney, setTransactionDetailMoney] = useState("");
  const [isIncome, setIsIncome] = useState(true);

  const handleRadioChange = (e) => {
    setIsIncome(e.target.value === "income");
  };
  const { addTransaction } = useTransactions();
  // 버튼 클릭 시
  const handleAddTransaction = () => {
    const newTransaction = {
      id: Date.now(),
      description: transactionDetailText,
      amount: parseInt(transactionDetailMoney),
      type: isIncome ? "income" : "expense",
      date: new Date().toISOString().slice(0, 10),
    };

    addTransaction(newTransaction);

    // 입력 초기화
    setTransactionDetailText("");
    setTransactionDetailMoney("");
    setIsIncome(true);
  };

  return (
    <div className={`${css.container} transaction-update`}>
      <h3>새로운 거래 추가</h3>

      <div className={css.input1}>
        <label htmlFor="input_1">거래 내용</label>
        <input
          id="input_1"
          value={transactionDetailText}
          onChange={(e) => setTransactionDetailText(e.target.value)}
          placeholder={"내용 입력..."}
        />
      </div>

      <div className={css.radioGroup}>
        <label>
          <input
            type="radio"
            name="isIncome"
            value="income"
            checked={isIncome === true}
            onChange={handleRadioChange}
          />
          수입
        </label>
        <label>
          <input
            type="radio"
            name="isIncome"
            value="expense"
            checked={isIncome === false}
            onChange={handleRadioChange}
          />
          지출
        </label>
      </div>

      <div className={css.input2}>
        <input
          id="input_2"
          type="number"
          value={transactionDetailMoney}
          onChange={(e) => setTransactionDetailMoney(e.target.value)}
          placeholder={"금액 입력..."}
        />
      </div>

      <div className={css.buttonContainer}>
        <button className={css.addButton} onClick={handleAddTransaction}>
          거래 추가
        </button>
      </div>
    </div>
  );
};

export default TransactionUpdate;
