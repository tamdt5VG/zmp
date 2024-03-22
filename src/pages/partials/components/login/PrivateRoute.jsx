import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import axios from "axios";
import { useState } from "react";

const PrivateRoute = () => {
    const [isLogin, setLogin] = useState(false);
    const [message, setMessage] = useState('');
    const user = useAuth();
  
    let username = localStorage.getItem("username") ;
    let token = localStorage.getItem("token") ;
    
    let now = Date.parse(new Date().toString());

    if (!user.token) {
        return <Navigate to="/login" />
    }

    axios({
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'ngrok-skip-browser-warning': 'skip-browser-warning'
        },
        baseURL: 'https://e592-115-79-209-221.ngrok-free.app/api/zalo-mini-app/get-user-session',
        params: {
            username: username
        },
    })
    .then(function (response) {
        if(now > Date.parse(response.data.expires_at)){
           setLogin(true)
           setMessage('Quá thời gian truy cập, vui lòng đăng nhập lại')
        }
        if(response.data.token != token){
            setLogin(true)
            setMessage('Tài khoản được đăng nhập ở thiết bị khác')
        }
    }).catch(function (error){
        console.log(error);
    })

    if(isLogin == true) {
        return <Navigate to="/login" state={message} />; 
    }
  return <Outlet />;
};

export default PrivateRoute;