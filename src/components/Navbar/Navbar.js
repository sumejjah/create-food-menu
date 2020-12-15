import React from 'react';
import styled from 'styled-components';
import { useAuth0 } from "@auth0/auth0-react";
import { NavDropdown } from 'react-bootstrap';

const Navbar = () => {
  const { isAuthenticated, logout, user } = useAuth0();
  const isUser = isAuthenticated && user;

  return (
    <NavbarWrapper>
      {isUser ? (
        <NavDropdown
          title={`${user.name && `Welcome, ${user.name} `}`}
          id="nav-dropdown"
          alignRight
        >
          <NavDropdown.Item>
            <span
              onClick={() => {
                logout({ returnTo: window.location.origin });
              }}
            >
              Logout
            </span>
          </NavDropdown.Item>
        </NavDropdown>
      ) : null}
    </NavbarWrapper>
  );
}

const NavbarWrapper = styled.div`
  width: 100%;
  height: 52px;
  border-bottom: 1px solid gray;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  a {
    color: var(--clr-black);
  }
`;

export default Navbar;