import React, {Component} from 'react';

class R15_Map extends Component{

    componentDidMount(){
        const Map_Arr = [3,2,8,8];
        //4개의 요소가 들어간 변수
        const Map_newArr = Map_Arr.map(x=>x);
        //map이라는 내장함수를 사용중
        //(x=>x) : 함수로서 동작함
        //매개변수를 받아서 중괄호 안에 구현하는데 만약
        //매개변수가 하나고 리턴해야하는게 딱하나뿐이라면
        //한줄로표현할수있음
        //그래서 그걸 한줄로 표현한것
        //x를 그대로리턴해주는것
        //3이 x에 들어가고 그 x값을 그래도리턴하기때문에
        //뉴어레이에도 3이 그대로 들어감
        console.log("1. Map_nulitArr : ["+Map_nuliArr+"]");

        const Map_nuliArr = Map_Arr.map(x=>x*2);
        //익명함수만 써주고 리턴을 써주지않음
        console.log("2. Map_multiArr : ["+Map_nuliArr+"]");

        const ObjArray = [{key:'react', value:'200'},
                          {key:'라약트', value:'TwoHundred'}];
        const Map_objArr = ObjArray.map((obj,index)=>{
            console.log((index+3)+". obj : "+JSON.stringify(obj));
            const Obj = {};
            Obj[obj.key] = obj.value;
            return Obj;
        });
        console.log("5. Map_objArr : "+JSON.stringify(Map_objArr));
    }
    render(){
        return(
            <h2>[this is map]</h2>
        )
    }
}

export default R015_Map;