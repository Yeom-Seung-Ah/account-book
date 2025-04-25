import React, { useState } from "react";
import css from "./../css/HistoryDetail.module.css";

const HistoryDetail = ({ transaction, onDelete }) => {
  const [hover, setHover] = useState(false);

  const handleDelete = () => {
    const confirm = window.confirm("정말 삭제하시겠습니까?");
    if (confirm) onDelete(transaction.id);
  };

  return (
    <div
      className={`${css.item} ${
        transaction.type === "income" ? css.income : css.expense
      }`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {hover && (
        <button className={css.deleteButton} onClick={handleDelete}>
          ❌
        </button>
      )}
      <div className={css.text}>{transaction.description}</div>
      {transaction.type === "income" ? <span>+</span> : <span>-</span>}
      <div className={css.amount}>{transaction.amount.toLocaleString()}원</div>
      <div className={css.date}>{transaction.date}</div>
    </div>
  );
};

export default HistoryDetail;
