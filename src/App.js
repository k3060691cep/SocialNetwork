import React from "react";
import "./App.css";
import Aside from "./components/aside/Aside.jsx";
import {Route} from "react-router-dom";
import MessengerContainer from "./components/messenger/MessengerContainer";
import UsersContainer from "./components/users/usersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import GamesContainer from "./components/games/GamesContainer";
import LoginPage from "./components/login/Login";

const App = () => {
    return (
        <div className="App">
            <HeaderContainer/>
            <div className="container">
                <div className="wrapper">
                    <Aside/>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>} />
                    <Route path='/messenger' render={() => <MessengerContainer/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/games' render={() => <GamesContainer/>}/>
                    <Route path='/login' render={() => <LoginPage/>}/>
                </div>
            </div>
        </div>
    );
};

export default App;

