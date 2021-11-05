import React, { useState, useContext } from "react";
import {
  LoginBox,
  LoginTitle,
  StyledForm,
  UserBox,
  StyledInput,
  StyledLabel,
  StyledAlert,
  StyledButton,
  StyledSpan,
} from "./Login.styles";
import { useHistory } from "react-router-dom";
import GlobalContext from "../../providers/Global/GlobalContext";
import { actions } from "../../utils/reducer/actions";
import loginInputs from "../../utils/loginInputs";
import loginApi from "../../utils/login.api";

const Login = () => {
  const { dispatch } = useContext(GlobalContext);

  const [errorState, setErrorState] = useState({ exists: false, message: "" });

  const history = useHistory();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    e.preventDefault();
    setLoginData((current) => {
      return {
        ...current,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const authData = await loginApi(loginData.email, loginData.password);
      dispatch({
        type: actions.setUser,
        payload: { ...authData.mockedUser, authenticated: true },
      });
      history.push("/notes");
    } catch (error) {
      setErrorState({ exists: true, message: error.message });
    }
  };

  return (
    <LoginBox>
      <LoginTitle>Login</LoginTitle>
      <StyledForm>
        {loginInputs.map((input) => (
          <UserBox key={input.id}>
            <StyledInput
              id={input.id}
              type={input.type}
              name={input.name}
              value={loginData[input.name]}
              required
              onChange={handleInputChange}
            />
            <StyledLabel>{input.label}</StyledLabel>
          </UserBox>
        ))}
        {errorState.exists && (
          <UserBox>
            <StyledAlert>Error: {errorState.message}</StyledAlert>
          </UserBox>
        )}
        <StyledButton onClick={handleSubmit}>
          {[...Array(4)].map((el, index) => (
            <StyledSpan key={index} />
          ))}
          Submit
        </StyledButton>
      </StyledForm>
    </LoginBox>
  );
};

export default Login;
