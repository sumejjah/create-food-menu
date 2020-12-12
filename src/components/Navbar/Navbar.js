import React from 'react';
import styled from 'styled-components';
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const {
    isAuthenticated,
    logout,
    user,
    isLoading,
  } = useAuth0();
  const isUser = isAuthenticated && user;

  return (
    <NavbarWrapper>
      {isUser ? (
        <>
          <span>{user.name}</span>
          <button
            onClick={() => {
              logout({ returnTo: window.location.origin });
            }}
          >
            Logout
          </button>
        </>
      ) : null}
    </NavbarWrapper>
  );
}

const NavbarWrapper = styled.div`
  width: 100%;
  height: 52px;
  border-bottom: 1px solid gray;
`;

export default Navbar;