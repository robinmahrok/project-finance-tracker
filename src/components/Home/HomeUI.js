import React from "react";
import CategoryBreakdownContainer from "../CategoryBreakdown/CategoryBreakdownContainer";
import TransactionListContainer from "../TransactionList/TransactionListContainer";

function HomeUI(props) {

  return (
    <>
    <TransactionListContainer />
    <CategoryBreakdownContainer />
    </>
  );
}

export default HomeUI;
