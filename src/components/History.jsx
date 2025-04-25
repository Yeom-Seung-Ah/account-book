import React from "react";
import HistoryDetail from "./HistoryDetail";
import css from "./../css/History.module.css";

const History = () => {
  return (
    <div className={`${css.container} history`}>
      <div>히스토리 영역입니다.</div>
      <HistoryDetail />
    </div>
  );
};

export default History;
