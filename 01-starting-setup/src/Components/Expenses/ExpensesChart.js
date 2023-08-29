import React from "react";
import Chart from "../Chart/Chart";//여기에서 차트를 표현해줘야하니까 차트 임포트해줌

const ExpensesChart = (props) => {
    const chartDataPoints = [//chartDataPoints : 배열 하나 만듦
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  for (const expense of props.expenses) {
    /* props.expenses각연도에해당하는모든데이터가다들어가있음 
    하나하나씩 expenses에 넘김 넘겨받은 데이터는 date라는 key 를 가짐 
    월데이터를 expensMonth에 넣음 expensMonth는 월 데이터가 됨 
    expensMonth를 요소번호로 이용해서 */
    const expenseMonth = expense.date.getMonth();
    chartDataPoints[expenseMonth].value += expense.amount;
    }
    return <Chart dataPoints={chartDataPoints} />;//배열 chartDataPoints를 넘겨줌
};


export default ExpensesChart;//데이터를 취합
