import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"
import Card from "../UI/Card";

//function Expenses (props) { //props.expenses배열을 갖게됨.
const Expenses = (props) => {
    return (
        <Card className="expenses">
            <div>
                <ExpenseItem 
                    title={props.expenses[0].title}
                    amount={props.expenses[0].amount}
                    date={props.expenses[0].date}
                />
            </div>
            <div>
                <ExpenseItem 
                    title={props.expenses[1].title}
                    amount={props.expenses[1].amount}
                    date={props.expenses[1].date}
                />
            </div>
            <div>
                <ExpenseItem 
                    title={props.expenses[2].title}
                    amount={props.expenses[2].amount}
                    date={props.expenses[2].date}
                />
            </div>
            <div>
                <ExpenseItem 
                    title={props.expenses[3].title}
                    amount={props.expenses[3].amount}
                    date={props.expenses[3].date}
                />
            </div>
      </Card>
    );
};

export default Expenses;