//새로운 값을 받는 컴포넌트?

import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = () => {
    return (
    <div className="new-expense">
        <ExpenseForm />
    </div>
    );
};
export default NewExpense;