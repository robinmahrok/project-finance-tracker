
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUpdatedFolderData } from "../../store/slice/folderDataSlice";
import CategoryBreakdownUI from "./CategoryBreakdownUI";
import getExpenseList from '../../core/services/getExpenseList';

function CategoryBreakdownContainer(props) {

  const updatedFolderData = useSelector((state)=> state?.folderDataSlice);
  const {folderData} = updatedFolderData;  
  const [data, setData] = useState({});
  useEffect(()=>{
   if(Object.keys(folderData).length){
    let allTransactions = Object.values(folderData);
    let categoryExpenses = calculateCategoryExpenses(allTransactions);
    console.log(categoryExpenses,'00000000000000');
    setData(categoryExpenses);
   }
  },[folderData])

  const calculateCategoryExpenses = (transactions) => {
    let totalIncome = 0;
    let totalExpenses = 0;
    const categories = {};

    transactions.forEach(transaction => {
      if (transaction.category === 'Income') {
        totalIncome += parseInt(transaction.amount);
      } else {
        totalExpenses += parseInt(transaction.amount);
        if (transaction.category in categories) {
          categories[transaction.category] += transaction.amount;
        } else {
          categories[transaction.category] = transaction.amount;
        }
      }
    });

    // Convert categories object to an array of objects for PieChart
    const categoryData = Object.keys(categories).map(category => ({
      name: category,
      value: categories[category]
    }));

    return { totalIncome, totalExpenses, categoryData };
  };

  return (data?.totalIncome && <CategoryBreakdownUI data={data}/>);
}

export default CategoryBreakdownContainer;
