import React from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';

const ErrorPage = ({ goToUrl }) => (
  <Wrapper>
    <Title>Oops!</Title>
    <Message>We can't seem to find the page you're looking for.</Message>
    <Button variant="dark" onClick={() => { goToUrl('/')}}>Go to dashboard</Button>
  </Wrapper>
);

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

const Title = styled.div`
  font-weight: bold;
  font-size: 72px;
`

const Message = styled.div`
  font-size: 32px;
`;

export default ErrorPage;