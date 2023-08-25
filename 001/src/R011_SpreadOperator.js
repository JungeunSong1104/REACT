import React, { Component } from 'react';

class R011_SpreadOperator extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount(){
        const varArray1 = ['num1', 'num2'];
        const varArray2 = ['num3', 'num4'];
        const sumVarArr = [varArray1[0], varArray1[1], varArray1[0], varArray1[1]];
        //const sumVarArr = [].concat(varArray1, varArray2);
        console.log('1. sumVarArr : '+sumVarArr);
        //ES6 Array
        const sumLetArr = [...varArray1, ...varArray2];
        console.log('2. sumLetArr : '+sumLetArr);
        const [sum1, sum2, ...remain] = sumLetArr;
        console.log('3. sum1 : '+sum1+'sum2 : '+sum2+'remain : '+remain);

        const varObj1 = { key1 : 'val1', key2 : 'val2'};
        const varObj2 = { key2 : 'new2', key3 : 'val'};
        //javascript Objectj;

        const sumVarObj = Object.assign({}, varObj1, varObj2);
        console.log('4. sumvarObj : '+JSON.stringify(sumVarObj));
        //ES6 Object
        const sumLetObj = {...varObj1, ...varObj2};
        console.log('5. sumLetObj : '+JSON.stringify(sumLetObj));
        const {key1, key3, ...others} = sumLetObj;
        console.log('6. key1 : '+key1+', key3 : '+key3+', others : '+JSON.stringify(others)) ;
    }

    render(){
        return(
            <h2>[this is spreadoperator]</h2>
        )
    }
}

export default R011_SpreadOperator;