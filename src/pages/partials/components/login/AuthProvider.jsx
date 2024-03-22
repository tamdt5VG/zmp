import React, { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "zmp-ui";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const { openSnackbar, setDownloadProgress, closeSnackbar } = useSnackbar();
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [expired, setExpired] = useState(localStorage.getItem("expired") || "");
  const navigate = useNavigate();
  const loginAction = async (data) => {
    try {
      axios.post('https://e592-115-79-209-221.ngrok-free.app/api/zalo-mini-app/check-login', {
        headers:{
        'ngrok-skip-browser-warning': 'skip-browser-warning'
        },
        username: data['username'],
        password: data['password']
      })
      .then(function (res) {
        console.log(res)
        if (res.data.error==0) {
          setUser(res.data.user);
          setToken(res.data.token);
          setExpired(res.data.expired);
          localStorage.setItem("username", res.data.user);
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("expired", res.data.expired);
          openSnackbar({
            text: 'OK',
            type: "success",
          });
          navigate("/");
          return;
        }
        if(res.data.error==1){
          openSnackbar({
            text: res.data.status,
            type: "error",
          });
        }
      })
    } catch (err) {
      console.error(err);
    }
  };

  const logOut = () => {
    setUser(null);
    setToken("");
    setExpired("");
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    localStorage.removeItem("expired");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ token, expired, user, loginAction, logOut }}>
      {children}
    </AuthContext.Provider>
  );

};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};