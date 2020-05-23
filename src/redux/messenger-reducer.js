//создаем константу (она несет в себе имя action которое мы придумавыем сами);
//action-это обьект который приходит в бизнес с внешнего мира,
//dispatch анализирует этот action смотрит совпадение и если находит выполняет действия

const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
    dialogsData: [
        {id: 1, name: "Dima"},
        {id: 2, name: "Viktor"},
        {id: 3, name: "Andrei"},
        {id: 4, name: "Ivan"}
    ],
    massageData: [
        {id: 1, massage: "you"},
        {id: 1, massage: "hello"},
        {id: 1, massage: "are"},
        {id: 1, massage: "Hove are you"},
        {id: 1, massage: "We well"},
        {id: 1, massage: "Goood"}
    ],
    newMessageBody: ""
};

const messengerReducer = (state = initialState, action) => {



    switch(action.type){
        case  UPDATE_NEW_MESSAGE_BODY:{
            return {
                ...state,
                newMessageBody: action.body
            };
        }
        case SEND_MESSAGE:{
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: "",
                massageData:[...state.massageData,{id: 1, massage: body}],
            };
        }
        default:
            return state;
    }
};

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = body => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
});
export default messengerReducer;