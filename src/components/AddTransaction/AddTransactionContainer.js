
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUpdatedFolderData } from "../../store/slice/folderDataSlice";
import AddTransactionUI from "./AddTransactionUI";

function AddTransactionContainer(props) {

  const dispatch = useDispatch();
  const updatedFolderData = useSelector((state)=> state?.folderDataSlice);
  const {folderData} = updatedFolderData;
  const actionHandler= (newTransaction = {})=>{
    let folderLength = Object.keys(folderData).length 
    let id = folderLength+1
    let previousTransactions = Object.values(folderData);
    let newData = [...previousTransactions, {
      "id": id,
      "title": newTransaction?.title,
      "amount": parseInt(newTransaction?.amount),
      "category": newTransaction?.category,
      "date": newTransaction?.date,
      "isIncome": newTransaction?.type === "Income" ? true : false 
    }];
    dispatch(setUpdatedFolderData({...newData}));
  }

  return <AddTransactionUI actionHandler={actionHandler}/>;
}

export default AddTransactionContainer;
