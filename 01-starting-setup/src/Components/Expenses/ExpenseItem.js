import React, { useState } from "react";//추가로 { useState } 하나 더 임포트해주자
//useState : 리액트에서 가장 중요한 키컨텐트
//state란 : 
//props란 : 
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
//card를 사용하고있음 그전에는 컴포넌트에 같이있었지만 지금은 ui에 있으니까
//디렉토리가 한단계올라감

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);//초기값 정해줄수있음 props.title
  //setTitle은 함수임 세터함수
  //setTitle은title 변수값을 세팅하기위한 함수

  console.log('ExpenseItem evaluated by React');
  //익스펜스아이템이 실행될때마다 호출됨
  
//   const clickHandler = () =>{
//     console.log("clicked");
//   };
  const clickHandler = () => {
    //title = "Updated";
    setTitle("Updated");//매개변수로서전달이돼야함
    //setTitle : 타이틀이바뀜
    //타이틀변수를 뭘로 선언했는지 생각해보자 setTitle
    //setTitle 하면 바로 값이 바뀌는 게아님 : 
    console.log("button clicked");
  }
  //가장기본적인 방식은 함수를 정희해주는것
  //클릭이벤트처리해주는걸 중간에 jsx코드에 자바스크립트 코드 끼워넣는건 매우 안좋은방법
  //가장추천하는방식 : 함수를 만들어주는것

  return (
    <Card className="expense-item">
        {/* <div className="">{props.date.toLocaleDateString()}</div> */}
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
        </div>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={clickHandler}>Change title</button>
    </Card>
  );
  //함수는 익명함수가 될수도 내가 정의한 함수가 될수도있음
  //많이 하는 실수 : 함수뒤에 ()를 다는것 {clickHandler}() 
  //이렇게 쓰면 읽어 드릴 때 위에서부터 읽어들이다가 메모리 어딘가에
  //클릭핸들러라는 이름으로 만들어 놓음
  //쭉 내려가다가 clickHandler()를 만나는 순간 온클릭이라는 행위를 했을때
  //자바스크립트는 쭉 내려가다가 이 구문 자체를 evaluate을 함
  //자바스크립트가 코드를 읽어들이고 해석한다는 소리는 평가를 한다는 뜻 
  //하나하나의 코드를 실행할수있으면 실행해버린다는것
  //특정 이벤트에 함수를 할당할때 주의해야함
  
};

export default ExpenseItem;//비용을 가져오는 창임
//각각의 컴포넌트는 결국 
//함수는 누군가가 실행을 해줘야함
//함수는 언제실행이되는가 : 
//컴포넌트 안의 함수들을 직접 실행한적은 한번도 없음
//이것들을 실행하는 타이밍  : 인덱스코드가 먼저 실행되고 리액트돔크리에이트를
//이용해서 루트객체를 찾은다음에 루트를 만든다음에 앱컴포넌트를 실행함
//여기서부터 앱함수가 실행되는것
//릴액트도 결국 자스 라이브러리기 때문에 <App />컴포넌트가 실행이되고
//익스펜시스 -> 익스펜스아이템/익스펜스데이트 순차적로 호출이됨
//리턴을 할때 jsx코드를 만들어서 돌려줌

