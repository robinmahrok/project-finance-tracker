
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SummaryUI from "./SummaryUI";

function SummaryContainer(props) {

  const [totalIncome, setTotalIncome ] = useState(0);
  const [totalExpenses, setTotalExpenses ] = useState(0);
  const [balance, setBalance ] = useState(0);

  const updatedFolderData = useSelector((state)=> state?.folderDataSlice);
  const {folderData} = updatedFolderData;  

  useEffect(()=>{
   if(Object.keys(folderData).length){
    let allTransactions = Object.values(folderData);
    calculateSummary(allTransactions);
   }
  },[folderData])



  const calculateSummary= (allTransactions)=>{
    let income = 0;
    let expenses = 0;
    allTransactions.forEach(transaction => {
      if (transaction?.isIncome) {
        income += parseInt(transaction.amount);
      } else {
        expenses += parseInt(transaction.amount);
      }
    });

    const balanceAmount = income - expenses;
    setTotalExpenses(expenses);
    setTotalIncome(income)
    setBalance(balanceAmount);
  }

  return <SummaryUI totalIncome={totalIncome} totalExpenses={totalExpenses} balance={balance}/>;
}

export default SummaryContainer;
