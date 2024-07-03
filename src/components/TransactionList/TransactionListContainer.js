
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TransactionListUI from "./TransactionListUI";

function TransactionListContainer(props) {

  const [transactionList, setTransactionList ] = useState({});
  const updatedFolderData = useSelector((state)=> state?.folderDataSlice);
  const {folderData} = updatedFolderData;  
  
  useEffect(()=>{
   if(Object.keys(folderData).length){
    let allTransactions = Object.values(folderData);
    setTransactionList(allTransactions);
   }
  },[folderData])


  return (transactionList.length && <TransactionListUI transactions={transactionList}/>);
}

export default TransactionListContainer;
