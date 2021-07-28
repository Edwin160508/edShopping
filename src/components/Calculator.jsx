import React from 'react';
import { useSelector } from 'react-redux';

function Calculator (){
    const result = useSelector(function (state){
        return state.calculator;
    })
    return <>
        <div>
            <input type="text" placeholder="a"/>
            <input type="text" placeholder="b"/>
            <button>somar</button>
            <button>subtrair</button>              
        </div>
        <div>
            {result}
        </div>  
    </>
}


export default Calculator;