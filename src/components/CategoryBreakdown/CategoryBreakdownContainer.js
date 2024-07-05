
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CategoryBreakdownUI from "./CategoryBreakdownUI";

function CategoryBreakdownContainer(props) {

  const updatedFolderData = useSelector((state)=> state?.folderDataSlice);
  const {folderData} = updatedFolderData;  
  const [data, setData] = useState({});
  useEffect(()=>{
   if(Object.keys(folderData).length){
    let allTransactions = Object.values(folderData);
    let categoryExpenses = calculateCategoryExpenses(allTransactions);
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
