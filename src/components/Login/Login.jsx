import { useState } from "react";
import { connect } from "react-redux";
import { setUserData } from "../Store/login-reducer";
import { Navigate, NavLink } from "react-router-dom";
import s from "./Login.module.css";

const Login = (props) => {
  const [name, setName] = useState("Admin");
  const [password, setPassword] = useState("admin");

  const changeInputName = (e) => {
    setName(e.currentTarget.value);
  };

  const changeInputPassword = (e) => {
    setPassword(e.currentTarget.value);
  };

  const setData = () => {
    props.setUserData(name, password);
  };

  if (!props.loginPage.isAuth) {
    return (
      <div className={s.body}>
        <div>
          <div>
            <p> Login </p> <input value={name} onChange={changeInputName} />
          </div>
          <div>
            <p> Password </p>
            <input
              type="password"
              value={password}
              onChange={changeInputPassword}
            />
          </div>

          {/* <NavLink to="/" className={s.link} onClick={setData}>
            Sign In
          </NavLink> */}
          <button onClick={setData}> Sign in</button>
        </div>
      </div>
    );
  }
  return <Navigate to={"/"} />;
};

const mapStateToProps = (state) => {
  return {
    loginPage: state.loginPage,
  };
};

export default connect(mapStateToProps, { setUserData })(Login);
