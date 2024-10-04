import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CTAButton } from '../styles/Buttons';
import { FaBars } from 'react-icons/fa'; // Ensure react-icons is installed and imported

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
    flex-direction: row;
    align-items: center;
    padding: 1rem;
    justify-content: space-between;
  }
`;

const Logo = styled.h1`
  font-size: 1.8rem;
  color: #333;
  a {
    text-decoration: none;
    color: inherit;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const NavLinks = styled.nav<{ isOpen: boolean }>`
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

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')}; /* Hide by default on mobile */
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    background-color: #fff;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    padding: 1rem;

    ul {
      flex-direction: column;
      align-items: center;
    }

    li {
      margin: 10px 0;
    }
  }
`;

const ButtonsContainer = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    margin-top: 10px;

    a:not(:last-child) {
      margin-right: 0;
      margin-bottom: 10px;
    }
  }
`;

const HamburgerIcon = styled(FaBars)`
  display: none;
  font-size: 2rem;
  cursor: pointer;
  color: #333;

  @media (max-width: 768px) {
    display: block;
    z-index: 101; /* Keep it above the navigation menu */
  }
`;

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <HeaderContainer>
      <Logo>
        <Link to="/">Tenderai</Link>
      </Logo>

      {/* Hamburger icon always visible on mobile */}
      <HamburgerIcon onClick={toggleMenu} />

      {/* Navigation Links */}
      <NavLinks isOpen={menuOpen}>
        <ul>
          <li>
            <Link to="features">RFPs</Link>
          </li>
          <li>
            <Link to="customers">Customers</Link>
          </li>
          <li>
            <Link to="final-check">Final Check</Link>
          </li>
          {isMobile && <li>
            <CTAButton href="#book-demo">Book Demo</CTAButton>
          </li>}
        </ul>
      </NavLinks>
      {!isMobile && <CTAButton href="#book-demo">Book Demo</CTAButton>}
    </HeaderContainer>
  );
};

export default Header;
