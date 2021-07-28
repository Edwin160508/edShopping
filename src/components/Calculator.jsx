import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sum } from '../store/Calculator/Calculator.actions';

function Calculator (){
    const dispatch = useDispatch();
    const result = useSelector(state => state.calculator)
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    
    return <>
        <div>
            <input 
                type="text" placeholder="a"
                value={a} 
                onChange={(event) => setA(Number(event.target.value)) }
            />
            <input type="text" placeholder="b" 
                value={b} 
                onChange={(event) => setB(Number(event.target.value)) }
            />
            <button
                onClick={()=>{
                    dispatch(sum(a,b))                    
                }}
            >somar</button>
            <button>subtrair</button>              
        </div>
        <div>
            {result}
        </div>  
    </>
}


export default Calculator;