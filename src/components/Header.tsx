
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CTAButton } from '../styles/Buttons';

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

  @media (max-width: 768px) {
    flex-direction: column;  /* Stack the logo and buttons vertically on mobile */
    align-items: center;
    padding: 1rem;  /* Reduce padding for mobile */
  }
`;

const Logo = styled.h1`
  font-size: 1.8rem;
  color: #333;
  a {
    text-decoration: none; /* Remove underline */
    color: inherit; /* Inherit the color from parent (Logo) */
  }
  @media (max-width: 768px) {
    font-size: 1.5rem;  /* Reduce font size on mobile */
  }
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

  /* Remove vertical stacking on mobile */
  @media (max-width: 768px) {
    ul {
      justify-content: center;  /* Center the navigation links */
    }
    li {
      margin-left: 10px;  /* Reduce the space between nav links on mobile */
    }
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;

  /* Add space between buttons for desktop */
  a:not(:last-child) {
    margin-right: 10px;  /* Adds 10px of space between buttons on desktop */
  }

  @media (max-width: 768px) {
    flex-direction: column;  /* Stack buttons vertically on mobile */
    margin-top: 10px;

    /* Add space between the buttons on mobile */
    a:not(:last-child) {
      margin-right: 0;  /* Remove margin-right for mobile */
      margin-bottom: 10px;  /* Adds 10px of space between buttons */
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo><Link to="/">Tenderai</Link> </Logo>
      <NavLinks>
        <ul>
          <li>
            <Link to="features" >
              RFPs
            </Link>
          </li>
          <li>
            <Link to="customers" >
              Customers
            </Link>
          </li>
          <li>
            <Link to="final-check" >
              Final Check
            </Link>
          </li>
        </ul>
      </NavLinks>
      <ButtonsContainer>
        {/* <LoginButton href="#login">Login</LoginButton> */}
        <CTAButton href="#book-demo">Book Demo</CTAButton>
      </ButtonsContainer>
    </HeaderContainer>
  );
};

export default Header;
