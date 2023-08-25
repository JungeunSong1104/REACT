import React, { Component } from 'react';

class R009_Es6 extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
}

componentDidMount(){
    const jsString1 = '자바스크립트';
    const jsString2 = '입니다/n다음 줄입니다.';
    console.log(jsString1+'문자열'+jsString2+'~');

    const Es6String1 = 'ES6';
    const Es6String2 = '입니다';

    console.log(`${Es6String1} 문자열${Es6String2}!!___다음 줄입니다`);

    const LongString = "ES6에 추가된 String 함수들입니다";
    console.log('starstWith : '+LongString.startsWith("ES6에 추가"));
    console.log('endsWith : '+LongString.endsWith("함수들입니다"));
    console.log('includes : '+LongString.includes("추가된 String"));

    render() {
        return
            <h2>[THIS IS ES6 STRING]</h2>;
    }
}

export default R009_Es6;
//리액트트렌드 : 요즘은 클래스형태를 잘안씀 함수형 컴포넌트를 씀
//발전과정이 클래스먼저나왔고 그다음에 함수형이 나오게된거라
//클래스형 먼저배움