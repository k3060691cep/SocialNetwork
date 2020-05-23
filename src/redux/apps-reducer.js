const UPDATE_NUMBER1 = "UPDATE_NUMBER1";
const UPDATE_NUMBER2 = "UPDATE_NUMBER2";
const UPDATE_OPERATOR = "UPDATE_OPERATOR";


let initialState = {
    numbers1: [],
    numbers2: [],
    operator: []
};

const appsReducer = (state = initialState, action) => {

    switch(action.type){
        case  UPDATE_NUMBER1:{
            return {
                ...state,
                numbers1: action.number1
            };
        }
        case  UPDATE_NUMBER2:{
            return {
                ...state,
                numbers2: action.number2
            };
        }
        case  UPDATE_OPERATOR:{
            return {
                ...state,
                operator: action.operator + action.operator
            };
        }
        default:
            return state;
    }
};


export const updateNumber1 = number1 => ({
    type: UPDATE_NUMBER1,
    number1: number1
});
export const updateNumber2 = number2 => ({
    type: UPDATE_NUMBER2,
    number2: number2
});
export const updateOperator = operator => ({
    type: UPDATE_OPERATOR,
    operator: operator
});
export default appsReducer;

