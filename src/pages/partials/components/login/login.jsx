import React, { useState } from "react";
import { useAuth } from "./AuthProvider";
import { Input, Button, Page, Text } from "zmp-ui";
import { useLocation } from "react-router-dom";

const Login = () => {
  const message = useLocation();
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const auth = useAuth();
  const handleSubmitEvent = (e) => {
    e.preventDefault();
    if (input.username !== "" && input.password !== "") {
      auth.loginAction(input);
      return;
    }
    alert("please provide a valid input");
  };
  
  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Page style={{
      backgroundImage:'url("https://img.freepik.com/free-vector/modern-polygon-technology-background_1035-17925.jpg")',
      backgroundPosition:'center'
    }}>
  <form onSubmit={handleSubmitEvent} style={{
      marginTop:'15vh',
      padding:'15vw'
    }}>
     
        <div className="form_control">
          <Text.Title bold={"true"} size="xLarge" style={{
            textAlign:'center',
            color:'red'
          }}>{message.state}</Text.Title>
          <label htmlFor="user-email">Username:</label>
          <Input
            name="username"
            onChange={handleInput}
          />
        </div>
        <div className="form_control">
          <label htmlFor="password">Password:</label>
          <Input.Password
            id="password"
            name="password"
            aria-describedby="user-password"
            aria-invalid="false"
            onChange={handleInput}
          />
        </div>
        <Button className="btn-submit" htmlType="submit">Log In</Button>
    </form>

    </Page>
    
  );
};

export default Login;