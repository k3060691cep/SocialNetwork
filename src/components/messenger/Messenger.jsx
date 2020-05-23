import React from "react";
import messenger from "./Messenger.module.css";
import {Route, NavLink, Redirect} from "react-router-dom";


const DialogItem = props => {
    let path = "/messenger/" + props.id;
    return <NavLink to={path}>{props.name}</NavLink>;
};

const Massage = props => {
    let pathMassege = "/messenger/" + props.id;

    return (
        <div className={messenger.container}>
            <Route path={pathMassege}>{props.massage}</Route>
        </div>
    );
};

const Messenger = props => {

    let state = props.messengerPage;

    let dialogsElements = state.dialogsData.map(dialogs => (
        <DialogItem name={dialogs.name} key={dialogs.id} id={dialogs.id}/>
    ));

    let massageElements = state.massageData.map(massages => (
        <Massage massage={massages.massage} key={massages.id} id={massages.id}/>
    ));

    let newMessageBody = state.newMessageBody;

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.newMassege(body)

    };
    let onSendMessageClick = () => {
        props.sendMessage()
    };
    if(!props.isAuth){
        return <Redirect to={"/login"}/>

    };

    return (
        <div className={messenger.messenger}>
            <div className={messenger.friend}>{dialogsElements}</div>
            <div className={messenger.massage}>{massageElements}
                <div className={messenger.textareaContainer}>
                    <textarea onChange={onNewMessageChange} value={newMessageBody} className={messenger.textarea}/>
                    <button onClick={onSendMessageClick}>send</button>
                </div>
            </div>
        </div>

    );
};

export default Messenger;




















///////////////////////////////////////////////



/*


import React from "react";
import messenger from "./Messenger.module.css";
import {Route, NavLink} from "react-router-dom";
import {updateNewMessageBodyCreator, sendMessageCreator} from '../../redux/messenger-reducer.js'
import store from "../../redux/redux-store";

const DialogItem = props => {
    let path = "/messenger/" + props.id;
    return <NavLink to={path}>{props.name}</NavLink>;
};

const Massage = props => {
    let pathMassege = "/messenger/" + props.id;

    return (
        <div className={messenger.container}>
            <Route path={pathMassege}>{props.massage}</Route>
        </div>
    );
};

const Messenger = props => {

    let state = props.store.getState().messengerPage;

    let dialogsElements = state.dialogsData.map(dialogs => (
        <DialogItem name={dialogs.name} id={dialogs.id}/>
    ));

    let massageElements = state.massageData.map(massages => (
        <Massage massage={massages.massage} id={massages.id}/>
    ));

    let newMessageBody = state.newMessageBody;
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body))

    };
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    };

    return (
        <div className={messenger.messenger}>
            <div className={messenger.friend}>{dialogsElements}</div>
            <div className={messenger.massage}>{massageElements}
                <div className={messenger.textareaContainer}>
                    <textarea onChange={onNewMessageChange} value={newMessageBody} className={messenger.textarea}/>
                    <button onClick={onSendMessageClick}>send</button>
                </div>
            </div>
        </div>

    );
};

export default Messenger; */
