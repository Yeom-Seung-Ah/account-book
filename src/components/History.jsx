import React from "react";
import HistoryDetail from "./HistoryDetail";
import css from "./../css/History.module.css";

const History = ({ transactions, removeTransaction }) => {
  return (
    <div className={`${css.container} history`}>
      <h3 className={css.stickyHeader}>내역</h3>
      <div className={css.scrollArea}>
        {transactions.length === 0 ? (
          <p className={css.empty}>거래 내역이 없습니다🤔</p>
        ) : (
          transactions.map((t) => (
            <HistoryDetail
              key={t.id}
              transaction={t}
              onDelete={removeTransaction}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default History;
