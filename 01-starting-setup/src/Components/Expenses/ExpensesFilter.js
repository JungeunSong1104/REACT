import React from 'react';
import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  const dropdownChangeHandler= (event) =>{//체인지핸들러는 기본적으로 매개변수를받음
    props.onChangeFilter(event.target.value);//props로 전달된 함수를 실행시켜서 변경된 데이터를 매개변수로 전달해줌
    /*
    함수의 주소를 넣은 곳이 prop인 onChangeFilter이기 때문에
    전달된 prop의 이름으로 실행시키는것
    props가 가진 onChangeFilter
    */
  };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          {/* 셀렉트 필터가 동작을 할 때 값을 선택할텐데 값을 선택할때 발생하는 이벤트 이름이
          인풋태그같은거는 대부분 onChange 이용 */}
          <option value='2023'>2023</option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;