import React from "react";
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap';

import githubLogo from '../../assets/images/logo.png';

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Wrapper>
      <Logo>
        <img src={githubLogo} alt="login" />
      </Logo>
      <Button variant="dark" onClick={loginWithRedirect}>
        Login / Sign Up
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100vh;
  background-color: #eaedf3;
  color: #3e3f42;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button {
    margin-top: 30px;
  }
`;

const Logo = styled.div`
  img {
    width: 500px;
    height: 400px;
  }
`

export default Login;
