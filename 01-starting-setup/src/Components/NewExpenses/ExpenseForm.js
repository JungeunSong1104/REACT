import React, { useState } from "react";
import "./ExpenseForm.css";
//state를 활용하면 input창의 값을 되돌려서 세팅할수있어야겠지

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  /* 
  useState 컴포넌트 안에서 선언
  enteredTitle : 타이틀의 현재 상태를 저장하기 위한 변수 임의로 호출해주지않을거임
  input태그에 값을 입력을 할때 titleChangedHandler 실행이 되면서 이벤트 값을 가지고
  안의 내용을 실행할거기때문
  */
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  //몇개의 스테이트가 있든 상관없이 각각의 스테이트가 관리가됨
  //스테이트를 보면 결국엔 하나의 폼에 입력된 데이터고

  /*
  const [userInput, setUserInput] = useState({
    //모든 스테이트를 하나로 합치자
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  }); //useState훅이 만들어짐
  */

  const titleChangedHandler = (event) => {
    //event라는 prop이 전달됨
    setEnteredTitle(event.target.value);
    //setEnteredTitle 호출
    //인풋데이터가 변할때(인풋에 값이 입력되면) enteredTitle에 들어간 데이터가 변하게 설정
    /*
    setUserInput({
      ...userInput,
      enteredTitle: event.target.value,
    }); //객체 형태로 저장함
    */
    //setUserInput((prevState) => {
    /*
      여기에 함수가 있으면 리액트가 알아서 호출해줌
      기본 전달되는 매개변수가 하나있음
      이름은 마음대로지만 보통 prevState로 작성함
      전달되는 값은 같음
      */
    //return { ...prevState, enteredTitle: event.target.value };
    /*
      함수내부에는 리턴값 하나 필요
      이전상태를 받아서 새로운 상태를 리턴
      prevState에는 언제나 호출될 당시에 무조건 리액트가 관리하던 최신상태가 들어감
      그래서 prevState 써주는게 좋음
      그래도 각각 state를 
      */
    //});
  };
  const AmountChangedHandler = (event) => {
    setEnteredAmount(event.target.value);
    /* 
    여기에 실제로 들어가는 데이터는 문자열임
    넘버로 해놨지만 문자열로 들어감 
    */
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // }); 
       //객체 형태로 저장함
  };
  const DateChangedHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // }); 
       //객체 형태로 저장함
  };

  // const inputChangedHandler = (identifier, value) => {
  //   if (identifier === "title") {
  //     setEnteredTitle(value);
  //   } else if (identifier === "date") {
  //     setEnteredTitle(value);
  //   } else {
  //     setEnteredTitle(value);
  //   }
  // };

  const submitHandler = (event) => {
    event.preventDefault();
    //preventDefault : event가 가진함수, 서버리퀘스트를 막아줌?
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData); //모아둔 expenseData를 매개변수로 넘겨줌
    console.log(expenseData);
    setEnteredTitle(""); //아래 jsx에서 input의 value에 값이 안들어가겠지?
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      {/* 
        form에 있는 양식 자체가 제출이 되기 때문에
        버튼이 눌리면 자바스크립트에서 버튼의 영향력이 상위태그로 퍼져나감
        버튼에다가 onClick을 달지 않고 form에 submit 될때 실행되게 form에 
        onSubmit이벤트달아줄거임 */}
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          {/*<input type="text" onChange={titleChangedHandler} /> */}
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangedHandler}
          />
          {/* input은 titleChangedHandler를 실행시킴 titleChangedHandler는 인풋의 하위 모듈이라고생각할수있음
            전달이 될때 titleChangedHandler */}
          {/*
            onChange에 inpuChangedHandler를 사용하려면
            onChange는 결국 받아야 하는게 함수를 받음 {titleChangedHandler} 여기에 함수주소가 들어간다는것
            여기에 함수주소를 넣으려면 함수를 만들어서 이름을 써줘도 되지만
            직접적으로 익명함수를 정의해도됨
            각각 titleChangedHandler AmountChangedHandler 이런식으로 함수 안만들어도되고
            통합함수 만들어서 onChange에 익명함수로 직접 넣어줘도 됨
          */}
          {/* 중괄호안에 익명함수를 넣을수도있지만 추천하는 방법은 아님
                여기서 굳이 익명함수를 쓰면 모든 디브들에 전부 익명함수를 붙여넣어야
                하기때문에 함수를 따로 만들고
          */}
        </div>
        {/* 텍스트 입력 받는 부분*/}
        {/* 타이틀이 변할때, 어마운트가변할때, 데이트가 변할때 데이터를 받아서 
            처리할 거기 때문에 onInput이라는 이벤트가 발생하지않음..?
            on은 기본적으로 입력이 된다는 것은 입력란이 변한다는거니까 change를 쓰자
        */}

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={AmountChangedHandler}
          ></input>
        </div>

        {/* 넘버 입력 받는 부분*/}
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-10"
            step="2022-12-31"
            value={enteredDate}
            onChange={DateChangedHandler}
          />
        </div>
        {/* 넘버 입력 받는 부분 / type="date" 자동으로.. 날짜설정해주나?*/}
      </div>
      {/* reload의 문제점 reload하면 자바스크립트의 처음부터 끝까지 돌아감?
            버튼을 눌렀을 때 서버에 요청하면 안됨 아이템이 추가가 되어야하지*/}
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
