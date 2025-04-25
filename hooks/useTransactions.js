// src/hooks/useTransactions.js
import { useState, useEffect } from "react";

const LOCAL_STORAGE_KEY = "transactions";

const useTransactions = () => {
  const [transactions, setTransactions] = useState([]);

  // localStorage에서 초기 데이터 불러오기
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedData) {
      setTransactions(storedData);
    }
  }, []);

  // 거래 추가 함수
  const addTransaction = (newTransaction) => {
    const updatedTransactions = [newTransaction, ...transactions];
    setTransactions(updatedTransactions);
    localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify(updatedTransactions)
    );
  };

  // 거래 삭제 함수 (선택사항)
  const removeTransaction = (id) => {
    const updatedTransactions = transactions.filter((tx) => tx.id !== id);
    setTransactions(updatedTransactions);
    localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify(updatedTransactions)
    );
  };

  return {
    transactions,
    addTransaction,
    removeTransaction,
  };
};

export default useTransactions;
