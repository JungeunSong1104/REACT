import React from "react";
// import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./Components/Expenses/Expenses";
//js를 가져오는것 css는 뒤에 꼭 .css를 붙임
import NewExpense from "./Components/NewExpenses/NewExpense";

//export default function App() {
const App = () => {//fuction과 화살표함수는 스타일차이라고 보면됨?
  //익명함수를 사용하는 습관화되어있는 다른 프로그래머들의 라이브러리를 보고
  //익숙하지않은 사람들은 못받아들일수있음
  //App이라는 이름의 상수변수를 하나 만든것 거기에 익명함수를 만들어서 저장을한거임
  //함수가 적혀있는 공간이 어딘가에 있겠지 메모리 어딘가에 있는 공간의 주소를
  //상수 변수에 담아주는것 함수의 이름이 필요할때 주소가들어있는 상수이름을 
  //쓰거나 함수 호출을 할때 App() 이런식으로 함수를 호출하게됨
  //함수를 만드는 행위자체를 단축화한거나마찬가지
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  
  // return (React.createElement('div', {}, 
  // React.createElement('h2', {}, "Let's get Started"), 
  // React.createElement(Expenses, {expenses:expenses}))
  // //괄호안에 필요한 개수만큼 넣을수있음
  // //괄호안에 객체형태로 전달이됨
  // //커스텀 컴포넌트 같은 경우에는 소괄호로 안묶어줘도됨
  // );

  return (
    <div>
      {/*<h2>Let's get started!</h2>*/}
      <NewExpense />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;