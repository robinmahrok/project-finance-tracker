
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TransactionListUI from "./TransactionListUI";

function TransactionListContainer(props) {

  const [transactionList, setTransactionList ] = useState({});
  const updatedFolderData = useSelector((state)=> state?.folderDataSlice);
  const {folderData} = updatedFolderData;  
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(()=>{
   if(Object.keys(folderData).length){
    let allTransactions = Object.values(folderData);
    const filteredTransactionsVar = allTransactions.filter(transaction => {
      const transactionDate = new Date(transaction.date);
      const start = startDate ? new Date(startDate) : null;
      const end = endDate ? new Date(endDate) : null;
      return (!start || transactionDate >= start) && (!end || transactionDate <= end);
    });
    setTransactionList(filteredTransactionsVar);
   }
  },[folderData, endDate, startDate])

  return (transactionList.length && <TransactionListUI 
    transactions={transactionList} 
    setEndDate={setEndDate} 
    setStartDate={setStartDate}
    startDate={startDate}
    endDate={endDate}
  />);
}

export default TransactionListContainer;
