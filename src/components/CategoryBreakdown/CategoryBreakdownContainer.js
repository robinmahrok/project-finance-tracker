
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUpdatedFolderData } from "../../store/slice/folderDataSlice";
import CategoryBreakdownUI from "./CategoryBreakdownUI";
import getExpenseList from '../../core/services/getExpenseList';

function CategoryBreakdownContainer(props) {

  const [folderData, setFolderData ] = useState({});
  const dispatch = useDispatch();
  const updatedFolderData = useSelector((state)=> state?.folderDataSlice);  
  useEffect(()=>{
    getExpenseList().then((response)=>{
      if(response){
        dispatch(setUpdatedFolderData({...response}));
        setFolderData(response)
      } else {
        alert("some error occured");
      }
    })
  },[])


  const actionHandler= ()=>{

  }

  return <CategoryBreakdownUI actionHandler={actionHandler}/>;
}

export default CategoryBreakdownContainer;
