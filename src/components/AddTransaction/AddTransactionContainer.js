
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUpdatedFolderData } from "../../store/slice/folderDataSlice";
import AddTransactionUI from "./AddTransactionUI";
import { PushSpinner } from "react-spinners-kit";
function AddTransactionContainer(props) {

  const dispatch = useDispatch();
  const [showSpinner, setShowSpinner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const updatedFolderData = useSelector((state)=> state?.folderDataSlice);
  const {folderData} = updatedFolderData;

  const actionHandler= (newTransaction = {})=>{
    setShowSpinner(true);
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
    setShowSpinner(false);
    setShowModal(true);
  }

  return <>
   {showSpinner ? <div className="spinner">
      <PushSpinner size={30} color="#007bff"
        loading={showSpinner} />
    </div> :
  <AddTransactionUI actionHandler={actionHandler} showModal={showModal} setShowModal={setShowModal}/>
   }
  </>;
}

export default AddTransactionContainer;
