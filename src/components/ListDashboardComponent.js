import React from "react";
import { PieChart } from "react-minimal-pie-chart";

function ListDashboard(props) {
let income = props.income;
let expense = props.expense;
  return (
    <PieChart
      viewBoxSize={[100, 100]}
      radius={25}
      data={[
        { title: "Income", value: income, color: "#7bd5f5" },
        { title: "Expenses", value: expense, color: "#787ff6" },
      ]}
      lengthAngle={360}
      label={({ dataEntry }) => Math.round(dataEntry.value) + '%'}
      labelPosition= {45}
      labelStyle={{
          fontSize: '4px',
          fontWeight: '300',
      }}
    />
  );
}

export default ListDashboard;
