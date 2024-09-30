import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 50px 0;
  background-color: #1a73e8;
  color: white;
  text-align: center;

  @media (max-width: 768px) {
    padding: 30px 0;  /* Reduce padding on mobile */
  }
`;

const FooterLinks = styled.div`
  margin-bottom: 20px;

  a {
    margin: 0 15px;
    font-size: 1.2rem;
    color: white;

    &:hover {
      text-decoration: underline;
    }

    @media (max-width: 768px) {
      display: block;  /* Stack footer links vertically on mobile */
      margin-bottom: 10px;
    }
  }
`;

const Copyright = styled.p`
  font-size: 0.9rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinks>
        <a href="#home">Home</a>
        <a href="#book-demo">Book Demo</a>
        <a href="#login">Login</a>
      </FooterLinks>
      <Copyright>&copy; 2024 Tenderai. All rights reserved.</Copyright>
    </FooterContainer>
  );
};

export default Footer;
