import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import './CategoryBreakdown.scss'; // Import SCSS file for styling

function CategoryBreakdownUI(props) {
  const {data} = props;
  const {totalIncome, totalExpenses, categoryData} = data
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#3cba9f", "#e8c3b9", "#c45850", "#f58231", "#4b7bec", "#10ac84"];

  return (
    <>
    <div className="category-breakdown">
      <h2>Expense Breakdown by Category</h2>
      <PieChart width={400} height={300}>
        <Pie
          data={categoryData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          label
        >
          {categoryData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
      <div className="summary">
        <h2>Summary</h2>
        <div className="summary-item">
          <strong>Total Income:</strong>
          <span className="green">&#8377;{totalIncome.toFixed(2)}</span>
        </div>
        <div className="summary-item">
          <strong>Total Expenses:</strong>
          <span className="red">&#8377;{totalExpenses.toFixed(2)}</span>
        </div>
        <div className="summary-item">
          <strong>Balance:</strong>
          <span>&#8377;{(totalIncome - totalExpenses).toFixed(2)}</span>
        </div>
      </div>
    </div>
    </>
  );
}

export default CategoryBreakdownUI;
