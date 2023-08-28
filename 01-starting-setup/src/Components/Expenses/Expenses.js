import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import Card from "../UI/Card";

//function Expenses (props) { //props.expenses배열을 갖게됨.
const Expenses = (props) => {
  /*
  필터를 출력을 담당하는 함수를 만들자
  이 함수를 ExpenseFilter에 props로 내려줘야 하니까 Expenses에 ExpensesFilter를 넣고
  props로 내려줘애겟죠
  */
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangedHandler = (selectedYear) => {
    // console.log('Expense.js');
    // console.log(selectedYear);
    setFilteredYear(selectedYear);
    //실제로 값이 바뀐 다음에 리턴되는 데이터들이 제대로 렌더링 되는지 알아봐야겠지
  };

  return (
    <div>
      {/* 영역을 통일해야하니까 디브로 전부 묶어줌 */}
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangedHandler}
        />
        {/* ExpensesFilter : 임포트를 안해줘서 읽고있지 못함 임포트해줌 */}
        {/* 만든 함수를 실행시켜야하니까 prop을 통해서 ExpensesFilter 함수 넘겨줌
        onChangeFilter라는 prop을 통해서 filterChangedHandler 함수를 전달해줌 */}
        {props.items.map((expense) => (
        /*
        map이라는 함수 매우 중요 리액트에서 거의 반복문을 대체하듯이 사용
        filter 함수 중요 조건문 대신에 filter 함수 자주 사용
        */
          <ExpenseItem
          key={expense.id}
          /*
          key={index} 이렇게 넣어도 되는데 좋은방법아님
          key={} : 배열을 구분하기 위한 키라고 생각하면 됨 
          오라클에서 프라이머리키로 각각의 레코드를 구별하듯이
          키값으로 각각의 아이템을 구분함 근데 이미 id 값을 만들어놨었음
          key라는 prop은 우리가 따로 만들어주지 않아도 리액트가 알아서 넣어줌? 만들어줌?
          아이디와 속성ㅇ르 추가해서 넣어줄 필요는 없지만
          출력해줘야할 데이터같은경우는 객체에 아이디 값을 정해주는게좋음 
          */ 
          title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />//아래배열들을 얘로 대체
        ))}
        {/* 밑에서 expenses[0].title 이렇게 접근해줬다고해서 이런식으로하면 안되고 
            expense.title 이렇게 해줘야함 */}
        {/* 
        <ExpenseItem
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        />
        <ExpenseItem
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          date={props.expenses[1].date}
        />
        <ExpenseItem
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
          date={props.expenses[2].date}
        />
        <ExpenseItem
          title={props.expenses[3].title}
          amount={props.expenses[3].amount}
          date={props.expenses[3].date}
        />*/}
      </Card>
    </div>
  );
};

export default Expenses;
