import * as axios from "axios";

const instance  = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {"API-KEY": "1d78f9b5-0e3d-487b-8303-7840b7e78f84"},
});

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10 ) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response =>{
                return response.data
            });
    },
        follow(usersId) {
          return   instance.post(`/follow/${usersId}`)
        },
        unfollow(usersId) {
          return   instance.delete(`/follow/${usersId}`)
        },
    getProfile(userId){
        return instance.get(`profile/${userId}`)
    }
};
export const authAPI = {
   me(){
     return   instance.get(`auth/me`)
   }
};

