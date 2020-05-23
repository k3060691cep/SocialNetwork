import React from "react";
import {updateNewMessageBodyCreator, sendMessageCreator} from '../../redux/messenger-reducer.js'
import Messenger from "./Messenger";
import {connect} from 'react-redux'
import {withAuthRedirect} from "../../hoc/AuthRedirect";

let mapStateToProps = (state) => {

    return{
        messengerPage: state.messengerPage,

    }
};

let mapDispatchToProps = (dispatch) => {
    return{
        newMassege: (body) =>{ dispatch(updateNewMessageBodyCreator(body))},
        sendMessage: () =>{ dispatch(sendMessageCreator())}
    }
};

let AuthRedirectComponent = withAuthRedirect(Messenger);

const MessengerContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default MessengerContainer;



// const MessengerContainer = props => {
//     let onNewMessageChange = (body) => {
//         props.store.dispatch(updateNewMessageBodyCreator(body))
//
//     };
//     let onSendMessageClick = () => {
//         props.store.dispatch(sendMessageCreator())
//     };
//
//     return (
//
//       <Messenger newMassege={onNewMessageChange} sendMessage={onSendMessageClick} messengerPage={props.store.getState().messengerPage} />
//
//     );
// };


