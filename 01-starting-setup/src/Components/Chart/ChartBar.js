import React from "react";
import "./ChartBar.css";

const ChartBar = (props) => {
    let barFillHeight = "0%";

    if(props.maxValue > 0){//props를 통해 max값도 넘어옴
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
    }
    return(
        <div className="chart-bar">{/* 바 */}
            <div className="chart-bar__inner">{/* 외곽선*/}
                <div className="chart-bar__fill" style={{height : barFillHeight}}></div>{/* 채움(fill)*/}
                {/* 여기서 style은 react에서 사용한 style prop임 css style이랑 비슷하지만
                문자형태로 객체를 저장해서? 그래서 중괄호로 다시한번감싸줌 style={{height : barFillHeight}}
                style={{height : barFillHeight, backgroundColor : 'red'}} 속성을 여러개 쓰고싶을때는
                , 쓰고 뒤에 이어씀?
                key의 형태로 사용할때는 backgroundColor 이렇게 -대신 카멜케이스로 표시함
                style={"height:10%"} 이렇게 해주는 것 보다 여러개의 스타일을 적용시켜주기위해
                변수를 대입하듯이? 속성을? 사용함?
                퍼센테이지만큼 바의 높이를 정해줌?
                */}
            </div>
            <div className="chart-bar__label">{props.label}</div>{/* 몇 월인지 써줘야하니까*/}
        </div>
    );
};

export default ChartBar;