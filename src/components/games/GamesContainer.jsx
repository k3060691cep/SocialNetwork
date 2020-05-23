import React from "react";
import {connect} from "react-redux";
import Games from "./games";
import {updateNumber1, updateOperator, updateNumber2} from "../../redux/apps-reducer";

let mapStateToProps = (state) => {
    return{
        numbers1: state.apps.numbers1,
        numbers2: state.apps.numbers2,
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        updateNumber1: (number) =>{ dispatch(updateNumber1(number))},
        updateNumber2: (numberSecond) =>{ dispatch(updateNumber2(numberSecond))},
        updateOperator: (operator) =>{ dispatch(updateOperator(operator))},
    }
}

const GamesContainer = connect(mapStateToProps, mapDispatchToProps)(Games);

export default GamesContainer;

