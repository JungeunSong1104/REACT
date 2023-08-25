import React, { useState }  from 'react';//useState는 hook임
import './styles.css';

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
//     const [message, setMessage] = useState("");

//     const messageHandler = (event) => {
//         const enteredText = event.target.value;
//         if(enteredText.trim().length>=3){
//         //if(event.target.value.trim().length>=3){
//             setMessage("Valid");
//         }else{
//             setMessage("Invalid");
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
const App = () => {
    const [counter, setCount] = useState(0);
    
    const countHandler = () => {
        setCount(counter + 1)
    };

    return (
      <div>
        <p id="counter">{counter}</p>
        <button onClick={countHandler}>Increment</button>
      </div>
    );
};

export default App;

