import React from 'react';
import styled from 'styled-components';

const Loader = () => (
  <Spinner>
    <Bounce1 />
    <Bounce2 />
    <div />
  </Spinner>
);

const Spinner = styled.div`
  margin: 100px auto 0;
  width: 70px;
  text-align: center;

  > div {
    width: 16px;
    height: 16px;
    background-color: var(--clr-primary-3);
    margin-right: 5px;

    border-radius: 100%;
    display: inline-block;
    -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
    animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  }

  @-webkit-keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
    }
  }

  @keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
`;

const Bounce1 = styled.div`
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
`;

const Bounce2 = styled.div`
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
`;

export default Loader;