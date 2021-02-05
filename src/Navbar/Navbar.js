import React from "react";
import styled from "styled-components";
import { Title } from "../Styles/title";
import goaLogo from '../images/logoGoa.png';
import goaTitle from '../images/goatitle.png';

const NavbarStyled = styled.div`
  background-color: ghostwhite;
  padding: 10px;
  position: fixed;
  width: 100%;
  z-index: 999;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled(Title)`
  font-size: 20px;
  color: white;
  text-shadow: 1px 1px 4px #380502;
`;

const UserStatus = styled.div`
  color: black;
  font-size: 12px;
  margin-right: 30px;
`;

const LoginButton = styled.div`
  cursor: pointer;

`;

export function Navbar({login}) {
  return (
    <NavbarStyled>
      <Logo>
        <img src={goaLogo} alt="Goa Logo" width="44" height="44" />
        <img src={goaTitle} alt="Goa Title" width="70" height="40" />
      </Logo>
      <UserStatus>
        <LoginButton onClick={login}>Se connecter</LoginButton>
      </UserStatus>
    </NavbarStyled>
  );
}
