import React from 'react';

const Todo = (props) => {//데이터를 props로 받아주고
     return(
          <li>{props.text}</li>//props에 내가 지정한 이름 넘겨줌?
     )
};

export default Todo;