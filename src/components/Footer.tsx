import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 50px 0;
  background-color: #1a73e8;
  color: white;
  text-align: center;
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
  }
`;

const Copyright = styled.p`
  font-size: 0.9rem;
`;

const Footer = () => {
  return (
    <FooterContainer id="footer">
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
