/* No caso o state está representando a Calculadora*/
export default function (state = 0, action){
    switch(action.type){
        case 'SUM':{
            return action.payload[0] + action.payload[1];
        }
        case 'SUBTRACT':{
            return action.payload[0] - action.payload[1];
        }
        default:{
            return state;
        }
    }
}