import React, { Component }from "react";

class R014_ForEach extends Component{
    componentDidMount(){
        const For_Arr = [3, 2, 8, 8];
        const For_newArr = [];

        for(let i=0; i<For_Arr.length; i++){
            For_newArr.push(For_Arr[i]);
        }
        console.log("1. for_newArr : ["+For_newArr+"]");

        const ForEach_Arr = [3,3,9,8];
        const ForEach_newArr = [];
        ForEach_Arr.forEach((result) => {
            ForEach_newArr.push(result);
            //포이치를 사요하게되면 배열에 각각의 요소가 들어가있게되는데
            //배열 요소를 하나하나씩 매개변수로 넘겨준다고 보면됨
            //내장함수 포이치를 사용할때
            //괄호안에 들어가야하는게 함수 ForEach(함수)
            //간단하게 익명함수를 집어넣음
            //새로운 배열에 푸쉬명령을 사용하면 뒤에 새로운배열이
            //들어간다고 알려주는?
            //배열뒤에 포이치를 사요하게되면
            //첫번째인자가  리절트로 들어가게됨
            //첫번재반복이 실행이 될때 포이치의 뉴 어레이푸쉬함수를 이용해서
            //새로운 배열에 3을 집어넣는것
            //푸쉬의 매개변수가 리절트 리절트에 3이 들어오고 삼이 
            //푸쉬를 이용해 포이지뉴어레이에 들어감
            //리절트에집어넣고 내부문에서 리절트 매개변수값을 가진
            //푸쉬함수가 실행되고 포이치뉴어레이에 값이 들어가는것
            

        });
        console.log("2. ForEach_newArr : ["+ForEach_newArr+"]");
    }
    render(){
        return(
            <h2>[this is foreach]</h2>
        )
    }
}

export default R014_ForEach;