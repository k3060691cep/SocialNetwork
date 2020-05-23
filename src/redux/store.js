// reducer - это чистая функция которая принимает state и принимает action и если нужно этот ...
//action применяет к этому state и возвращает новый  state или же возвращает state который ...
// был до этого не изменненый
import messengerReducer from './messenger-reducer.js'
import profileReducer from './profile-reducer.js'


let store = {
  // _state: {
  //   messengerPage: {
  //     dialogsData: [
  //       { id: 1, name: "Dima" },
  //       { id: 2, name: "Viktor" },
  //       { id: 3, name: "Andrei" },
  //       { id: 4, name: "Ivan" }
  //     ],
  //
  //     massageData: [
  //       { id: 1, massage: "you" },
  //       { id: 1, massage: "hello" },
  //       { id: 1, massage: "are" },
  //       { id: 1, massage: "Hove are you" },
  //       { id: 1, massage: "We well" },
  //       { id: 1, massage: "Goood" }
  //     ],
  //     //newMessageBody : приходит с UI (Messenger) введенные данные( символы) в textarea
  //     //через action в dispatch
  //     newMessageBody: ""
  //   },
  //   profilePage: {
  //     postData: [
  //       { id: 1, post: "bla bla bla" },
  //       { id: 2, post: "cho kak" },
  //       { id: 3, post: "ayyyyy" },
  //       { id: 4, post: "ayyyyy" },
  //       { id: 5, post: "ayyyyy" },
  //       { id: 6, post: "wooohooooo" }
  //     ],
  //
  //     newPostText: ""
  //   },
  // },

  
  _callSubscriber() {},
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  //dispatch принимает в себя обьект action(у которого как минимум есть свойство type)
  dispatch(action) {

   this._state.profilePage = profileReducer(this._state.profilePage, action);
   this._state.messengerPage = messengerReducer(this._state.messengerPage, action);


    this._callSubscriber(this._state);

  }
};


export default store;

window.store = store;



