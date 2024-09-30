import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 100;
`;

const Logo = styled.h1`
  font-size: 1.8rem;
  color: #333;
`;

const NavLinks = styled.nav`
  ul {
    display: flex;
    list-style: none;

    li {
      margin-left: 20px;

      a {
        text-decoration: none;
        color: #333;
        font-size: 1.2rem;
        cursor: pointer;

        &:hover {
          color: #1a73e8;
        }
      }
    }
  }
`;

const LoginButton = styled.a`
  padding: 10px 20px;
  background-color: #f1f3f4;
  color: #333;
  border-radius: 5px;
  font-weight: bold;
  border: 1px solid #ddd;
  margin-right: 10px; /* Add space between Login and Book Demo buttons */

  &:hover {
    background-color: #e2e6ea;
  }
`;

const CTAButton = styled.a`
  padding: 10px 20px;
  background-color: #1a73e8;
  color: #fff;
  border-radius: 5px;
  font-weight: bold;

  &:hover {
    background-color: #1558c4;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>Tenderai</Logo>
      <NavLinks>
        <ul>
          <li>
            <Link to="features" smooth={true} duration={500}>
              RFPs
            </Link>
          </li>
          <li>
            <Link to="customers" smooth={true} duration={500}>
              Customers
            </Link>
          </li>
          <li>
            <Link to="final-check" smooth={true} duration={500}>
              Final Check
            </Link>
          </li>
        </ul>
      </NavLinks>
      <ButtonsContainer>
        <LoginButton href="#login">Login</LoginButton>
        <CTAButton href="#book-demo">Book Demo</CTAButton>
      </ButtonsContainer>
    </HeaderContainer>
  );
};

export default Header;
