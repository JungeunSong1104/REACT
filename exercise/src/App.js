// import React, { useState } from "react"; //useState는 hook임
// import "./styles.css";
// import Todo from './Todo';

//1번
// export default function App() {
//   //React.useState();//이게 useState 의 완전한모습임
//   const [price, setPrice] = useState(100); //컴포넌트 함수안에 useState를 설치해줘야함
//   const changePricehndler = () => {//함수정의
//    setPrice(75);//const 형태로 price를 저장했기 때문에 직접 값을 넣어줄수없음 오류가남
//    console.log(price);//버튼 눌렸을때 프라이스 값 출력하게 콘솔로보면 그 이전데이터가 먼저 나옴
//   }//상태를 업데이트하기위한 세터함수는 리액트한테 적절한 타이밍에 호출해달라고하는거기때문에
//   //즉시실행되지않음

//   return (
//         <div>
//             <p>${price}</p>
//             <button onClick={changePricehndler}>Apply Discount</button>
//         </div>
//     );//price를
//     //on
// }

/////////////////////////////////////////////////////////////////////////////////////////

//2번
// const App = () => {
//     //const [enteredText, setEnteredText] = useState("");
//     //setEnteredText : enteredText 이변수의값을 변경할 함수
//     // useState(""); 에서 "" 가 초기값
//     const [message, setMessage] = useState("Invalid");
//     const messageHandler = (event) => {
//     //messageHandler : 발생햇을때의 어쩌구를 잡아채서 했을때
//       const value = event.target.value;
//         if(value.trim().length<3){
//         //if(event.target.value.trim().length>=3){
//             setMessage("Invalid");
//         }else{
//             setMessage("Valid");
//         }
//     };
//     return (
//         <form>
//             <label>Your message</label>
//             <input type="text" onChange={messageHandler}/>
//             <p>{message}</p>
//         </form>
//     );
// };

//정원코드
// export default function App() {
//   const [message, setMessage] = useState("");

//   let warningMessage = "";

//   const messageCheckHandler = (event) => {
//     setMessage(event.target.value);

//   };

//   if (message.trim().length >= 3) {
//     warningMessage = "Valid Message";
//   } else {
//     warningMessage = "Invalid Message";
//   }

//   return (
//       <form>
//           <label>Your message</label>
//           <input type="text" onChange={messageCheckHandler} />
//           <p>{warningMessage}</p>
//       </form>
//   );
// }

//유나코드
// const App = () => {
//     const [message, setMessage] = useState("");
//     let warn = "invalid";

//     const messageHandler = (event) => {
//         if(event.target.value.trim().length >= 3){
//             setMessage(event.target.value);
//             warn = "valid";
//         }else{
//             setMessage("");
//             warn = "invalid";
//         }
//     };
//     return (
//         <form>
//             <label>Your message</label>
//             <input type="text" onChange={messageHandler}/>
//             <p>{warn}</p>
//         </form>
//     );
// };

/////////////////////////////////////////////////////////////////////////////////////

//3번
// const App = () => {
//   const [counter, setCountter] = useState(0);
//   const countHandler = () => {
//     setCountter((prevCounter) => prevCounter + 1);
//     setCountter((prevCounter) => prevCounter + 1);
//     setCountter((prevCounter) => prevCounter + 1);
//     setCountter((prevCounter) => prevCounter + 1);
//     setCountter((prevCounter) => prevCounter + 1);
//     /*
//     counter에 직접접근하면 안되고 setCount로 접근
//     세터사용할 때 하나의 스테이트를 설정을 할 때 이전 스테이트에 기반해서 증가시킬때는
//     원치않는 결과를 가져올수있음
//     ex : 이전 값에 기반해서 값을 증가시키는 함수를 여러번 실행한다고 생각해보자
//     setCount(counter + 1); setCount(counter + 1); setCount(counter + 1); setCount(counter + 1);
//     이렇게 했을경우 4식 증가해야하는데 실행해보면 하나씩만 늘어남
//     그래서 항상 최신 스테이트를 가져오기로 약속되어있는 prevstate를 사용하기로함
//     prevstate 사용방법 : 세터호출할때 내부에서 함수를 만들어서 정의를 함
//     매개변수로 전달된 애들은 무조건 이전상태가 저장이 됨
//     setCountter((prevCounter) => prevCounter + 1);
//     setCountter((prevCounter) => prevCounter + 1);
//     setCountter((prevCounter) => prevCounter + 1);
//     setCountter((prevCounter) => prevCounter + 1);
//     setCountter((prevCounter) => prevCounter + 1); 이렇게 하면 이제 5씩 증가함
//     */
//   };

//   return (
//     <div>
//       <p id="counter">{counter}</p>
//       <button onClick={countHandler}>Increment</button>
//     </div>
//   );
// };

/////////////////////////////////////////////////////////////////////////////////////

//4번
import React from "react";
import "./styles.css";
import Todo from "./Todo";

const DUMMY_TODOS = ["Learn React", "Practice React", "Profit!", "아수라방구라"];

const App = () => {
  return (
    <ul>
      {DUMMY_TODOS.map((todo) => (
        <Todo text={todo} />
      ))}
    </ul>//배열이니까 하나하나 따로 출력해주기 위해서 map 함수이용
    //mpa 함수 하나하나 매개변수를 요소..?
    //변수 안에 들어가있는 요소들이 동적으로 출력
    //DUMMY_TODOS 에 아수라 방구라라고 추가해주면 저절로 추가가 돼서 출력이됨

    // <ul>
    //   <Todo text={DUMMY_TODOS[0]} />
    //   <Todo text={DUMMY_TODOS[1]} />
    //   <Todo text={DUMMY_TODOS[2]} />
    // </ul>
    //맵 배우기 전에는 이런식으로 했었음 하지만 동적으로 출력하기위해서는
    //map함수를 사용한 위 방법으로 해야함 
  );
};

export default App;
