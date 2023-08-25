import React, { Component } from 'react';

class R005_LifecycleEx extends Component{
    constructor(props){//properties의 약자 생성자 생성할때 prpos 사용
        super(props);
        this.state = {};//statement를 초기화해줌
        console.log('1. constructor Call');
    }

    render(){
        console.log('3. render Call');
        return (
            <h2>[This is constructor function]</h2>
        )
    }
}

export default R005_LifecycleEx;
//App.js가 얘를 R005_LifecycleEx를 호출하고있음

//아래는 함수형 컴포넌트로 바꾼것
//클래스는 생성자가있지만 함수형은 없음 초기화는 시킬수있음
//함수형에서는 생성자를 안씀
