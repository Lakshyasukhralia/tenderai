import styled from 'styled-components';
import { motion } from 'framer-motion';

// Exporting the reusable CTAButton styled component
export const CTAButton = styled(motion.a)`
  padding: 10px 30px;
  background-color: #1a73e8;
  color: white;
  border-radius: 8px;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    background-color: #1558c4;
  }
`;

// Exporting another reusable LoginButton styled component
export const LoginButton = styled.a`
  padding: 10px 20px;
  background-color: #f1f3f4;
  color: #333;
  border-radius: 5px;
  font-weight: bold;
  border: 1px solid #ddd;
  cursor: pointer;

  &:hover {
    background-color: #e2e6ea;
  }
`;