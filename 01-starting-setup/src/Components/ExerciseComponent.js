// import React from "react";

// const ExerciseComponent = () => {
//     return <h1>"First exercise - done!"</h1>;
// };

// //외부에서 가져다 쓸거니까
// export default ExerciseComponent;

export default function ExerciseComponent (){
    return <h1>First Exercise - done!</h1>;
}//간소화함 엑스포트도 임포트도없음 왜냐면 기본 엑스포트문을 써줬기 때문 
//뒤의 함수를 임포트 하라고 바로 해준것
//디폴트 뒤에는 항상 함수자체만 와야함