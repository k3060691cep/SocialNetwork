import React from "react";
import userPhoto from "../../aseds/img/users.png";
import users from "./users.module.css";
import { NavLink } from "react-router-dom";
import Preloader from "../common/preloader/preloader";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    };
    return (

        <div className={users.container}>
            {props.isFetching ? <Preloader/> : null }
            <div className={users.choisePage}>{pages.map(p => {
                return <span className={props.currentPage === p && users.selectedPage}
                             onClick={(e) => {
                    props.onPageChanged(p)
                }}>{p}</span>
            })}</div>
            {props.users.map(u => <div key={u.id} className={users.items}>

                <div>
                    <div className={users.containerIco}>
                        <NavLink to={'/profile/'+u.id}>
                            <img className={users.usersPhoto}
                                                             src={u.photos.small != null ? u.photos.small : userPhoto}
                                                             alt="user"/></NavLink>
                    </div>
                    <div className={users.containerIco}>{u.followed
                        ? <button disabled={props.followingInProgress.some(id => id === u.id) } className={ users.button}
                                  onClick={() =>  {props.unfollow(u.id)

                        }}>Unfollow</button>
                        : <button disabled={props.followingInProgress.some(id => id === u.id)} className={users.button}
                                  onClick={() => { props.follow(u.id)

                        }}>Follow</button>}
                    </div>
                </div>
                <div className={users.info}>
                    <div>{u.name}</div>
                    <div>{'u.location.city'} </div>
                    <div>{'u.location.country'} </div>
                </div>
            </div>)
            }
        </div>)

};
export default Users;