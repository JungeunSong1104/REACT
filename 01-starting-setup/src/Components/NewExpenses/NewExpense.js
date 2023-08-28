//새로운 값을 받는 컴포넌트?

import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpensedataHandler = (enteredExpenseData) => {
    /* 입력된 enteredExpenseData가 여기에 저장됨 enteredExpenseData 라는 이름을 보면 
       입력한 데이터를 여기에 전달해준다는걸알수있음 
    */
    const expenseData = {
      ...enteredExpenseData, //매개변수로 받은걸 스프레드 연산자를 이용해서 뿌려줌
      id: Math.random().toString(), //나중을 위해 아이디 하나 추가해줌
    };
    props.onAddExpense(expenseData); //완성된 데이터인 expenseData를 매개변수로 넘겨줌
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpensedataHandler} />
      {/* 여기에서 saveExpensedataHandler 함수를 바로 실행할게 아니기 때문에 ()안붙임 */}
    </div>
  );
  /*
    여기에 onSaveExpenseSate라고 prop을 하나 만들어줌
    여기에 전달되는 데이터는 매개변수를 하나 받는 핸들러 함수(saveExpensedataHandler)를 만들어줌
    그 함수는 매개변수를 하나 받을거임
    */
};

export default NewExpense; //ExpenseForm에서 모은 데이터를 여기 NewExpense에 가져올거임
